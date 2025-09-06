import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  private baseUrl = 'http://localhost:8080/api/appointments'; // Spring Boot API

  constructor(private http: HttpClient) {}

  // Book appointment
  bookAppointment(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  // Get all appointments
  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}


