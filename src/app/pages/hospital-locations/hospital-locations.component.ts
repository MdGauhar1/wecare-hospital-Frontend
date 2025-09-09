import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HospitalService } from '../../services/hospital.service';

@Component({
  selector: 'app-hospital-locations',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hospital-locations.component.html',
  styleUrls: ['./hospital-locations.component.css']
})
export class HospitalLocationsComponent implements OnInit {
  locations: any[] = [];

  constructor(private service: HospitalService) {}

  ngOnInit() {
    this.service.getLocations().subscribe({
      next: (data) => {
        this.locations = Array.isArray(data) ? data : (data?.data || []);
      },
      error: (err) => {
        console.error('Error fetching locations:', err);
      }
    });
  }
}
