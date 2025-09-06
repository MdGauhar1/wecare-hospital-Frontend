import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HospitalService } from '../../services/hospital.service';

@Component({
  selector: 'app-hospital-locations',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <h2 class="title">Hospital Locations</h2>

      <div class="card-grid">
        <div class="card" *ngFor="let loc of locations">
          <div class="card-image">
            <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3" alt="{{loc.name}}">
          </div>
          <div class="card-content">
            <p class="date" style="color: green;">Available now</p>
            <h2>wEcare</h2>
            <p>{{ loc.city }}</p>
          </div>
          <div class="card-footer">
            <a [routerLink]="['/location', loc.id]" class="btn">View Details</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 60px;
    }
    .title {
      text-align: center;
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: bold;
    }
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
    .card {
      border: 2px solid #ccc; 
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      overflow: hidden;
      transition: transform 0.2s;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .card-image img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
    .card-content {
      padding: 15px;
      text-align: center;
    }
    .card-content h3 {
      margin: 10px 0;
      font-size: 18px;
      color: #333;
    }
    .card-content p {
      color: #666;
      font-size: 14px;
    }
    .date {
      color: #ff4081;
      font-size: 12px;
    }
    .card-footer {
      padding: 15px;
      text-align: center;
      background: #f9f9f9;
    }
    .btn {
      display: inline-block;
      padding: 8px 16px;
      background: #2196f3;
      color: #fff;
      border-radius: 6px;
      text-decoration: none;
      transition: background 0.2s;
    }
    .btn:hover {
      background: #1769aa;
    }
  `]
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






















