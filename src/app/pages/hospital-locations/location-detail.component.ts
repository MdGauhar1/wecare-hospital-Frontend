
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { HospitalService } from '../../services/hospital.service';

// @Component({
//   selector: 'app-location-detail',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   template: `
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

//   <div *ngIf="location; else loading" class="container">
    
//     <!-- Left: Hospital Image -->
//     <div class="image-section">
//       <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3" style="filter: brightness(90%);">
//     </div>

//     <!-- Right: Details -->
//     <div class="details-section">
//       <div>
//         <h2>{{ location.name }}</h2>
//         <p><strong><h2>Address:</h2></strong> {{ location.address }}</p>
//         <p><strong>City:</strong> {{ location.city }}</p>
//         <p><strong>Email: </strong>wecaregmail.com</p>
//       </div>
      
//       <div class="info-cards">
//         <div class="card emergency">
//           <span>Emergency: 102</span>
//           <span>{{ location.emergency }}</span>
//         </div>
//         <div class="card helpline">
//           <span>Helpline: 112</span>
//           <span>{{ location.helpline }}</span>
//         </div>
//       </div>

//       <div class="social-icons">
//         <a href="#"><i class="fab fa-facebook-f"></i></a>
//         <a href="#"><i class="fab fa-instagram"></i></a>
//         <a href="#"><i class="fab fa-youtube"></i></a>
//         <a href="#"><i class="fab fa-linkedin-in"></i></a>
//         <a href="#"><i class="fab fa-x-twitter"></i></a>
//       </div>
//     </div>
    
//   </div>

//   <ng-template #loading>
//     <p class="loading">{{ error ? error : 'Loading...' }}</p>
//   </ng-template>

//   <style>
//     .container {
//       max-width: 1000px;
//       margin: 2rem auto;
//       display: flex;
//       flex-direction: column;
//       border: 3px solid #1e3c72;
//       border-radius: 15px;
//       overflow: hidden;
//       box-shadow: 0 4px 12px rgba(0,0,0,0.15);
//     }
//     @media(min-width: 768px) {
//       .container {
//         flex-direction: row;
//       }
//     }
//     .image-section {
//       flex: 1;
//     }
//     .image-section img {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//     }
//     .details-section {
//       flex: 1;
//       padding: 2rem;
//       background-color: #385196ff;
//       color: white;
//       display: flex;
//       flex-direction: column;
//       justify-content: space-between;
//     }
//     .details-section h2 {
//       font-size: 2rem;
//       margin-bottom: 1rem;
//     }
//     .details-section p {
//       margin-bottom: 0.5rem;
//     }
//     .info-cards {
//       margin-top: 1rem;
//       display: flex;
//       flex-direction: column;
//       gap: 0.5rem;
//     }
//     .card {
//       display: flex;
//       justify-content: space-between;
//       padding: 0.5rem 1rem;
//       border-radius: 8px;
//       background-color: black;
//     }
//     .card.emergency span:first-child {
//       color: red;
//       font-weight: bold;
//     }
//     .card.emergency span:last-child {
//       color: #00ff99;
//     }
//     .card.helpline span:first-child {
//       color: #00ff99;
//       font-weight: bold;
//     }
//     .card.helpline span:last-child {
//       color: #a0f0c0;
//     }
//     .social-icons {
//       margin-top: 1.5rem;
//       display: flex;
//       gap: 1rem;
//       font-size: 1.2rem;
//     }
//     .social-icons a {
//       color: white;
//       text-decoration: none;
//       transition: color 0.2s;
//     }
//     .social-icons a:hover {
//       color: #ccc;
//     }
//     .loading {
//       text-align: center;
//       padding: 2rem;
//       color: #666;
//     }
//   </style>
//   `,
// })
// export class LocationDetailComponent implements OnInit {
//   location: any;
//   error: string | null = null;
//   randomImageUrl = 'https://source.unsplash.com/600x400/?hospital,building';

//   constructor(private route: ActivatedRoute, private service: HospitalService) {}

//   ngOnInit() {
//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     if (!id) {
//       this.error = 'Invalid location id';
//       return;
//     }
//     this.service.getLocation(id).subscribe({
//       next: data => this.location = data,
//       error: err => {
//         console.error('Error fetching location:', err);
//         this.error = 'Could not load location details';
//       }
//     });
//   }
// }























import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HospitalService } from '../../services/hospital.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-location-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

  <div *ngIf="location; else loading" class="container">
    
    <!-- Left: Hospital Image -->
    <div class="image-section">
      <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3" style="filter: brightness(90%);">
    </div>

    <!-- Right: Details -->
    <div class="details-section">
      <div>
        <h2>{{ location.name }}</h2>
        <p><strong><h2>Address:</h2></strong> {{ location.address }}</p>
        <p><strong>City:</strong> {{ location.city }}</p>
        <p><strong>Email: </strong>wecaregmail.com</p>
      </div>
      
      <div class="info-cards">
        <div class="card emergency">
          <span>Emergency: 102</span>
          <span>{{ location.emergency }}</span>
        </div>
        <div class="card helpline">
          <span>Helpline: 112</span>
          <span>{{ location.helpline }}</span>
        </div>
      </div>

      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
        <a href="#"><i class="fab fa-x-twitter"></i></a>
      </div>
    </div>
    
  </div>

  <ng-template #loading>
    <p class="loading">{{ error ? error : 'Loading...' }}</p>
  </ng-template>
  `,
  styles: [`
    .container {
      max-width: 1000px;
      margin: 2rem auto;
      display: flex;
      flex-direction: column;
      border: 3px solid #1e3c72;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    @media(min-width: 768px) {
      .container {
        flex-direction: row;
      }
    }
    .image-section {
      flex: 1;
    }
    .image-section img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .details-section {
      flex: 1;
      padding: 2rem;
      background-color: #385196ff;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .details-section h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .details-section p {
      margin-bottom: 0.5rem;
    }
    .info-cards {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .card {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      background-color: black;
    }
    .card.emergency span:first-child {
      color: red;
      font-weight: bold;
    }
    .card.emergency span:last-child {
      color: #00ff99;
    }
    .card.helpline span:first-child {
      color: #00ff99;
      font-weight: bold;
    }
    .card.helpline span:last-child {
      color: #a0f0c0;
    }
    .social-icons {
      margin-top: 1.5rem;
      display: flex;
      gap: 1rem;
      font-size: 1.2rem;
    }
    .social-icons a {
      color: white;
      text-decoration: none;
      transition: color 0.2s;
    }
    .social-icons a:hover {
      color: #ccc;
    }
    .loading {
      text-align: center;
      padding: 2rem;
      color: #666;
    }
  `]
})
export class LocationDetailComponent implements OnInit {
  location: any;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private service: HospitalService) {}

  ngOnInit() {
    // FIX: react to id changes
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const id = Number(params.get('id'));
          if (!id) {
            this.error = 'Invalid location id';
            return [];
          }
          return this.service.getLocation(id);
        })
      )
      .subscribe({
        next: data => {
          this.location = data;
          this.error = null;
        },
        error: err => {
          console.error('Error fetching location:', err);
          this.error = 'Could not load location details';
        }
      });
  }
}
