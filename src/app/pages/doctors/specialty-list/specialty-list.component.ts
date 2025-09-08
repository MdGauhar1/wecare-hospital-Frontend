
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { SpecialtyService } from '../../../services/specialty.service';
import { Specialty } from '../specialty.model';

@Component({
  selector: 'app-specialty-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './specialty-list.component.html',
  styleUrls: ['./specialty-list.component.css']
})
export class SpecialtyListComponent implements OnInit {
  specialties: Specialty[] = [];
  newName: string = '';

  constructor(
    private specialtyService: SpecialtyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadSpecialties();
  }

  // Load all specialties
  loadSpecialties(): void {
    this.specialtyService.getAll().subscribe({
      next: (data) => (this.specialties = data),
      error: (err) => console.error('Error fetching specialties:', err)
    });
  }

  // Navigate to doctors by specialty
  viewBySpecialty(id: number): void {
    this.router.navigate(['/doctors/specialty', id]);
  }

  // Add new specialty
  addSpecialty(): void {
    if (!this.newName.trim()) return;

    const newSpec: Partial<Specialty> = { name: this.newName }; // only send name
    this.specialtyService.create(newSpec as Specialty).subscribe({
      next: () => {
        this.newName = '';
        this.loadSpecialties(); // refresh list after save
      },
      error: (err) => console.error('Error adding specialty:', err)
    });
  }
}
