import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../home/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  baseUrl = 'https://localhost:44338/api/vehicles';

  constructor(private http: HttpClient) { }

    /** GET vehicles from the server */
    getVehicles(): Observable<Vehicle[]> {
      return this.http.get<Vehicle[]>(this.baseUrl)
    }
 
  findVehicle(search) {
    return this.http.get(`${this.baseUrl}/${search}`)
  }
 
  getVehiDetails(index): Observable<Vehicle> {
      return this.http.get<Vehicle>(`${this.baseUrl}/${index}`);
    }
}
