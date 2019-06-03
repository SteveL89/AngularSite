import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShipDetails } from './ship-details';

@Injectable({
  providedIn: 'root'
})
export class ShipService {
  url = 'http://localhost:4200/api/shipdetails';
  constructor(private http: HttpClient) { }

  getAllShips(): Observable<ShipDetails[]> {
    return this.http.get<ShipDetails[]>(this.url);
  }

  getShipById(shipId: string): Observable<ShipDetails> {
    return this.http.get<ShipDetails>(this.url + '/' + shipId);
  }

  createEmployee(ship: ShipDetails): Observable<ShipDetails> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<ShipDetails>(this.url, ship, httpOptions);
  }

  updateEmployee(ship: ShipDetails): Observable<ShipDetails> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<ShipDetails>(this.url + '/', ship, httpOptions);
  }

  deleteEmployeeById(shipId: string): Observable<ShipDetails> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete<ShipDetails>(this.url + '/DeleteEmployeeDetails?id=' + shipId, httpOptions);
  }
}
