import { Component, OnInit } from '@angular/core';
import { Doctor } from './doctor.model';
import { DoctorService } from '../../services/doctor.service';
import { SpecialtyService } from '../../services/specialty.service';
import { Specialty } from './specialty.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css'],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class DoctorFormComponent implements OnInit {
  doctor: Doctor = {
    name: '',
    yearsOfExperience: 0,
    languages: [],
    location: '',
    availableDays: [],
    specialty: { id: 0 }
  };

  specialties: Specialty[] = [];
  langInput = '';
  daysInput = '';

  constructor(
    private doctorService: DoctorService,
    private specialtyService: SpecialtyService
  ) {}

  ngOnInit(): void {
    this.specialtyService.getAll().subscribe(data => this.specialties = data);
  }

  saveDoctor() {
    this.doctor.languages = this.langInput.split(',').map(l => l.trim());
    this.doctor.availableDays = this.daysInput.split(',').map(d => d.trim());

    this.doctorService.add(this.doctor).subscribe(() => {
      alert('Doctor added successfully!');
    });
  }
}






