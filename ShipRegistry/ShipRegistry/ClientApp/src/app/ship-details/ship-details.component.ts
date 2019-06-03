import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ShipDetailsService } from '../ship-details.service';
import { ShipDetails } from '../ship-details';

@Component({
  selector: 'app-ship',
  templateUrl: './ship-details.component.html',
  styleUrls: ['./ship-details.component.scss']
})
export class ShipDetailsComponent implements OnInit {
  dataSaved = false;
  shipForm: any;
  allShipDetails: Observable<ShipDetails[]>;
  shipIdUpdate = null;
  massage = null;

  constructor(private formbulider: FormBuilder, private shipDetailsService: ShipDetailsService) { }

  ngOnInit() {
    this.shipForm = this.formbulider.group({
      name: ['', [Validators.required]],
      mass: ['', [Validators.required]],
      topSpeed: ['', [Validators.required]],
      powerRating: ['', [Validators.required]],
    });
    this.loadAllShipDetails();
  }
  loadAllShipDetails() {
    this.allShipDetails = this.shipDetailsService.getAllShipDetails();
  }
  onFormSubmit() {
    this.dataSaved = false;
    const ship = this.shipForm.value;
    this.Createship(ship);
    this.shipForm.reset();
  }
  loadshipToEdit(shipId: string) {
    this.shipDetailsService.getShipDetailsById(shipId).subscribe(ship => {
      this.massage = null;
      this.dataSaved = false;
      this.shipIdUpdate = ship.id;
      this.shipForm.controls['Name'].setValue(ship.name);
      this.shipForm.controls['Mass'].setValue(ship.mass);
      this.shipForm.controls['TopSpeed'].setValue(ship.topSpeed);
      this.shipForm.controls['PowerRating'].setValue(ship.powerRating);
    });

  }
  Createship(ship: ShipDetails) {
    if (this.shipIdUpdate == null) {
      this.shipDetailsService.createShip(ship).subscribe(
        () => {
          this.dataSaved = true;
          this.massage = 'Record saved Successfully';
          this.loadAllShipDetails();
          this.shipIdUpdate = null;
          this.shipForm.reset();
        }
      );
    } else {
      ship.id = this.shipIdUpdate;
      this.shipDetailsService.updateShip(ship).subscribe(() => {
        this.dataSaved = true;
        this.massage = 'Record Updated Successfully';
        this.loadAllShipDetails();
        this.shipIdUpdate = null;
        this.shipForm.reset();
      });
    }
  }
  deleteship(shipId: string) {
    if (confirm("Are you sure you want to delete this ?")) {
      this.shipDetailsService.deleteShipDetailsById(shipId).subscribe(() => {
        this.dataSaved = true;
        this.massage = 'Record Deleted Succefully';
        this.loadAllShipDetails();
        this.shipIdUpdate = null;
        this.shipForm.reset();

      });
    }
  }
  resetForm() {
    this.shipForm.reset();
    this.massage = null;
    this.dataSaved = false;
  }
} 
