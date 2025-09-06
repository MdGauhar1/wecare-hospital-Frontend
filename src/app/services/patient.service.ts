import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Patient {
  id?: number;
  name: string;
  age: number;
  email: string;
  gender: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = 'http://localhost:8080/api/patients'; // Spring Boot backend

  constructor(private http: HttpClient) {}

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }

   getPatientById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getPatient(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/${id}`);
  }

  updatePatient(id: number, patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/${id}`, patient);
  }

  deletePatient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}




