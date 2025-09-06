import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { SpecialtyService } from '../../services/specialty.service';
import { Doctor } from './doctor.model';
import { Specialty } from './specialty.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ⬅ Needed for ngModel

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css'],
  imports: [CommonModule, RouterModule, FormsModule] // ⬅ Include FormsModule
})
export class DoctorListComponent implements OnInit {
  doctors: Doctor[] = [];
  specialties: Specialty[] = [];
  selectedSpecialtyId: number = 0;

  constructor(
    private doctorService: DoctorService,
    private specialtyService: SpecialtyService
  ) {}

  ngOnInit() {
    this.loadSpecialties();
    this.loadDoctors();
  }

  loadDoctors() {
    this.doctorService.getAll().subscribe(data => this.doctors = data);
  }

  loadSpecialties() {
    this.specialtyService.getAll().subscribe(data => this.specialties = data);
  }

  filterBySpecialty() {
    if (this.selectedSpecialtyId === 0) {
      this.loadDoctors();
    } else {
      this.doctorService.getBySpecialty(this.selectedSpecialtyId)
        .subscribe(data => this.doctors = data);
    }
  }


  deleteDoctor(id: number) {
    this.doctorService.delete(id).subscribe(() => this.loadDoctors());
  }
}




















