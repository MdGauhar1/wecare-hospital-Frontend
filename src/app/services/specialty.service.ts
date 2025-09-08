import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Specialty } from '../pages/doctors/specialty.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpecialtyService {
  private apiUrl = 'http://localhost:8080/api/specialties';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Specialty[]> {
    return this.http.get<Specialty[]>(this.apiUrl);
  }

   create(spec: Specialty): Observable<Specialty> {
    return this.http.post<Specialty>(this.apiUrl, spec);
  }
}
