import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../pages/doctors/doctor.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DoctorService {
  private apiUrl = 'http://localhost:8080/api/doctors';





 
 


   // Static doctors
  private staticDoctors: Doctor[] = [
    {
      id: 201,
      name: 'Dr. Aisha Khan',
      yearsOfExperience: 10,
      languages: ['English', 'Hindi'],
      location: 'Delhi',
      availableDays: ['Mon', 'Wed', 'Fri'],
      specialty: { id: 101, name: 'Cardiology' }
    },
    {
      id: 202,
      name: 'Dr. Raj Verma',
      yearsOfExperience: 8,
      languages: ['English'],
      location: 'Mumbai',
      availableDays: ['Tue', 'Thu'],
      specialty: { id: 102, name: 'Neurology' }
    },
    {
      id: 203,
      name: 'Dr. Sunita Sharma',
      yearsOfExperience: 12,
      languages: ['Hindi', 'English'],
      location: 'Bangalore',
      availableDays: ['Mon', 'Tue', 'Fri'],
      specialty: { id: 103, name: 'Pediatrics' }
    },
    {
      id: 204,
      name: 'Dr. Karan Mehta',
      yearsOfExperience: 7,
      languages: ['English'],
      location: 'Chennai',
      availableDays: ['Wed', 'Thu'],
      specialty: { id: 104, name: 'Orthopedics' }
    }
  ];






  constructor(private http: HttpClient) {}

  // getAll(): Observable<Doctor[]> {
  //   return this.http.get<Doctor[]>(this.apiUrl);
  // }






   // Get all doctors (static + dynamic)
  getAll(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl).pipe(
      map((dynamicDoctors: Doctor[] = []) => [...this.staticDoctors, ...dynamicDoctors])
    );
  }







  add(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.apiUrl, doctor);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // doctor.service.ts
  getBySpecialty(specialtyId: number): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}/specialty/${specialtyId}`);
  }

  getById(id: number): Observable<Doctor> {
  return this.http.get<Doctor>(`${this.apiUrl}/${id}`);
}


}
