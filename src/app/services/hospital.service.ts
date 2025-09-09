// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class HospitalService {
//   private baseUrl = 'http://localhost:8080/api/hospital';

//   constructor(private http: HttpClient) {}

//   // Get overview
//   getOverview(): Observable<any> {
//     return this.http.get(`${this.baseUrl}/overview`);
//   }

//   // Get all locations
//   getLocations(): Observable<any> {
//     return this.http.get(`${this.baseUrl}/locations`);
//   }

//   // Get single location
//   getLocation(id: number): Observable<any> {
//     return this.http.get(`${this.baseUrl}/locations/${id}`);
//   }
// }





import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private baseUrl = 'http://localhost:8080/api/hospital';

  // ✅ Static data for fallback
  private overview = {
    name: 'WEcare Hospitals',
    mission: 'Committed to compassionate care, modern facilities, and expert doctors.',
    founded: 2005,
    branches: 5
  };

  private locations = [
    { id: 1, city: 'Delhi', address: '123 Health St, Delhi', contact: '011-23456789' },
    { id: 2, city: 'Mumbai', address: '456 Wellness Rd, Mumbai', contact: '022-98765432' },
    { id: 3, city: 'Bangalore', address: '789 Care Ave, Bangalore', contact: '080-12345678' },
    { id: 4, city: 'Patna', address: '189 Care Ave, Patna', contact: '080-12345678' }
  ];

  constructor(private http: HttpClient) {}

  // ✅ Get overview (with fallback)
  getOverview(): Observable<any> {
    return this.http.get(`${this.baseUrl}/overview`).pipe(
      catchError(() => of(this.overview))
    );
  }

  // ✅ Get all locations (with fallback)
  getLocations(): Observable<any> {
    return this.http.get(`${this.baseUrl}/locations`).pipe(
      catchError(() => of(this.locations))
    );
  }

  // ✅ Get single location (with fallback)
  getLocation(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/locations/${id}`).pipe(
      catchError(() => {
        const found = this.locations.find(loc => loc.id === id);
        return of(found || null);
      })
    );
  }
}
