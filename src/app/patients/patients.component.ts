import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: any[] = [];
  editId: number | null = null;
  editPatient: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadPatients();
  }

  loadPatients() {
    this.http.get<any[]>('http://localhost:8080/api/patients')
      .subscribe(data => this.patients = data);
  }

  startEdit(patient: any) {
    this.editId = patient.id;
    this.editPatient = { ...patient };
  }

  updatePatient() {
    this.http.put(`http://localhost:8080/api/patients/${this.editPatient.id}`, this.editPatient)
      .subscribe(() => {
        this.loadPatients();
        this.editId = null;
      });
  }

  deletePatient(id: number) {
    this.http.delete(`http://localhost:8080/api/patients/${id}`)
      .subscribe(() => this.loadPatients());
  }
}
