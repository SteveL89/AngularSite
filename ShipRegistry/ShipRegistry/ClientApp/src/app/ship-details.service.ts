import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShipDetails } from './ship-details';

@Injectable({
  providedIn: 'root'
})
export class ShipDetailsService {
  url = 'http://localhost:34200/api/shipdetails';
  constructor(private http: HttpClient) { }

  getAllShipDetails(): Observable<ShipDetails[]> {
    return this.http.get<ShipDetails[]>(this.url);
  }

  getShipDetailsById(shipId: string): Observable<ShipDetails> {
    return this.http.get<ShipDetails>(this.url + '/' + shipId);
  }

  createShip(ship: ShipDetails): Observable<ShipDetails> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<ShipDetails>(this.url, ship, httpOptions);
  }

  updateShip(ship: ShipDetails): Observable<ShipDetails> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<ShipDetails>(this.url + '/', ship, httpOptions);
  }

  deleteShipDetailsById(shipId: string): Observable<ShipDetails> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete<ShipDetails>(this.url + '?id=' + shipId, httpOptions);
  }
}
