import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private baseUrl = 'http://localhost:8080/api/hospital';

  constructor(private http: HttpClient) {}

  // Get overview
  getOverview(): Observable<any> {
    return this.http.get(`${this.baseUrl}/overview`);
  }

  // Get all locations
  getLocations(): Observable<any> {
    return this.http.get(`${this.baseUrl}/locations`);
  }

  // Get single location
  getLocation(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/locations/${id}`);
  }
}
