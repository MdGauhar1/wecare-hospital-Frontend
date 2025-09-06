import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientService, Patient } from '../services/patient.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-patient-update',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div *ngIf="patient" class="glass-card">
      <h2>Update Patient</h2>
      <form (ngSubmit)="updatePatient()">
        <label>
          Name
          <input [(ngModel)]="patient.name" name="name" placeholder="Enter name">
        </label>
        <label>
          Age
          <input type="number" [(ngModel)]="patient.age" name="age" placeholder="Enter age">
        </label>
         <label>
          Gender
          <input type="string" [(ngModel)]="patient.gender" name="gender" placeholder="Enter gender">
        </label>
         <label>
          Phone
          <input type="string" [(ngModel)]="patient.phone" name="phone" placeholder="Enter age">
        </label>
        <label>
          Email
          <input [(ngModel)]="patient.email" name="email" placeholder="Enter email">
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  `,
  styles: [`
    .glass-card {
      max-width: 450px;
      margin: 20px auto;
      padding: 30px 30px;
      border-radius: 20px;
      backdrop-filter: blur(15px);
      background: rgba(255, 255, 255, 0.85);
      border: 2px solid #1e3c72;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
      transition: transform 0.3s, box-shadow 0.3s;
      font-family: 'Poppins', sans-serif;
    }

    .glass-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 16px 40px rgba(0,0,0,0.3);
    }

    h2 {
      text-align: center;
      margin-bottom: 25px;
      font-size: 1.8rem;
      color: #222;
      text-shadow: 1px 1px 2px rgba(255,255,255,0.5);
    }

    form label {
      display: block;
      margin-bottom: 15px;
      font-weight: 600;
      color: #333;
    }

    input {
      width: 94%;
      padding: 10px 12px;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 8px;
      outline: none;
      transition: border 0.3s, box-shadow 0.3s;
    }

    input:focus {
      border-color: #2575fc;
      box-shadow: 0 0 8px rgba(37,117,252,0.5);
    }

    button {
      width: 100%;
      padding: 10px 0;
      margin-top: 15px;
      border: none;
      border-radius: 8px;
      background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
      color: #fff;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0,0,0,0.25);
    }

    @media(max-width: 480px) {
      .glass-card {
        padding: 25px 15px;
      }

      h2 {
        font-size: 1.5rem;
      }
    }
  `]
})
export class PatientUpdateComponent implements OnInit {
  patient: Patient = { name: '', age: 0, gender: '', phone: '', email: '' };

  constructor(
    private route: ActivatedRoute,
    private service: PatientService,
    private router: Router
  ) {}

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

  updatePatient() {
    if (this.patient.id) {
      this.service.updatePatient(this.patient.id, this.patient).subscribe(() => {
        this.router.navigate(['/patients']);
      });
    }
  }
}
