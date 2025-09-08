import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { SpecialtyService } from '../../../services/specialty.service';
import { Specialty } from '../specialty.model';

@Component({
  selector: 'app-specialty-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './specialty-list.component.html',
  styleUrls: ['./specialty-list.component.css']
})
export class SpecialtyListComponent implements OnInit {
  specialties: Specialty[] = [];

  constructor(
    private specialtyService: SpecialtyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadSpecialties();
  }

  loadSpecialties(): void {
    this.specialtyService.getAll().subscribe({
      next: (data) => (this.specialties = data),
      error: (err) => console.error('Error fetching specialties:', err)
    });
  }

  viewBySpecialty(id: number): void {
    this.router.navigate(['/doctors/specialty', id]);
  }
}
