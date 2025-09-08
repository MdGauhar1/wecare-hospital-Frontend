import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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

  private apiUrl = 'http://localhost:8080/api/patients';









   // Static patients (always available)
  private staticPatients: Patient[] = [
    { id: 301, name: 'John Doe', age: 30, email: 'john@example.com', gender: 'Male', phone: '1234567890' },
    { id: 302, name: 'Jane Smith', age: 28, email: 'jane@example.com', gender: 'Female', phone: '9876543210' },
    { id: 303, name: 'Alex Johnson', age: 35, email: 'alex@example.com', gender: 'Male', phone: '4567891230' },
    { id: 304, name: 'Emily Davis', age: 25, email: 'emily@example.com', gender: 'Female', phone: '7891234560' }
  ];








  constructor(private http: HttpClient) {}

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }




   // Get all patients (merge static + dynamic safely)
  // getPatients(): Observable<Patient[]> {
  //   return this.http.get<Patient[]>(this.apiUrl).pipe(
  //     map(dynamicPatients => [...this.staticPatients, ...dynamicPatients]),
  //     catchError(() => of(this.staticPatients)) // fallback to static if backend fails
  //   );
  // }




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




