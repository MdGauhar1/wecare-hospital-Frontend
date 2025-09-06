import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../../services/doctor.service';
import { Doctor } from '../doctor.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-doctor-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.css']
})
export class DoctorDetailComponent implements OnInit {
  doctor?: Doctor;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = Number(params.get('id'));
          if (!id) {
            this.error = 'Invalid doctor ID';
            return [];
          }
          return this.doctorService.getById(id);
        })
      )
      .subscribe({
        next: (data) => {
          this.doctor = data;
          this.error = null;
        },
        error: () => {
          this.error = 'Doctor not found';
          this.doctor = undefined;
        }
      });
  }
}
