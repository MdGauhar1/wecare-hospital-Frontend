import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PatientService, Patient } from '../services/patient.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-patient-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div *ngIf="patient" class="glass-card">
      <div class="avatar">{{ patient.name.charAt(0) }}</div>
      <h2>{{ patient.name }}</h2>
      <div class="info">
        <p><span>Age:</span> {{ patient.age }}</p>
        <p><span>Email:</span> {{ patient.email }}</p>
        <p><span>Gender:</span> {{ patient.gender }}</p>
        <p><span>Phone:</span> {{ patient.phone }}</p>
      </div>
    </div>
  `,
  styles: [`
    .glass-card {
      position: relative;
      max-width: 400px;
      margin: 60px auto;
      padding: 30px 20px;
      border-radius: 20px;
      backdrop-filter: blur(15px);
      background: rgba(255, 255, 255, 0.8);
      border: 2px solid #1e3c72;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      text-align: center;
      transition: transform 0.4s, box-shadow 0.4s;
      color: #222;
      font-family: 'Poppins', sans-serif;
    }

    .glass-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 16px 40px rgba(0,0,0,0.3);
    }

    .avatar {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      font-weight: 700;
      margin: 0 auto 20px auto;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      color: #fff;
    }

    h2 {
      font-size: 1.8rem;
      margin-bottom: 15px;
      letter-spacing: 1px;
      color: #222;
      text-shadow: 1px 1px 2px rgba(255,255,255,0.5);
    }

    .info p {
      margin: 8px 0;
      font-size: 1.1rem;
      color: #333;
    }

    .info span {
      font-weight: 600;
      color: #2575fc;
    }

    @media(max-width: 480px) {
      .glass-card {
        padding: 25px 15px;
      }

      h2 {
        font-size: 1.5rem;
      }

      .avatar {
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
      }
    }
  `]
})
export class PatientDetailComponent implements OnInit {
  patient?: Patient;

  constructor(private route: ActivatedRoute, private service: PatientService) {}

  ngOnInit() {
    // Subscribe to route parameter changes
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = params.get('id');
          return id ? this.service.getPatient(+id) : [];
        })
      )
      .subscribe(data => this.patient = data);
  }
}
