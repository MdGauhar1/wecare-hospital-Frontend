import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Specialty } from '../pages/doctors/specialty.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class SpecialtyService {
  private apiUrl = 'http://localhost:8080/api/specialties';



  // Static specialties
  private staticSpecialties: Specialty[] = [
    { id: 101, name: 'Cardiology' },
    { id: 102, name: 'Neurology' },
    { id: 104, name: 'Orthopedics' },
    { id: 105, name: 'Dermatology' },
    { id: 106, name: 'Gastroenterology' },
    { id: 108, name: 'Psychiatry' },
    { id: 109, name: 'Radiology' },
  ];

  constructor(private http: HttpClient) {}

  // getAll(): Observable<Specialty[]> {
  //   return this.http.get<Specialty[]>(this.apiUrl);
  // }


   // Get dynamic specialties from backend
  getAll(): Observable<Specialty[]> {
    return this.http.get<Specialty[]>(this.apiUrl).pipe(
      map(dynamicSpecialties => [...this.staticSpecialties, ...dynamicSpecialties])
    );
  }

   create(spec: Specialty): Observable<Specialty> {
    return this.http.post<Specialty>(this.apiUrl, spec);
  }
}
