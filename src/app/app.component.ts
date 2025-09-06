import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  findId!: number;
  updateId!: number;
  findDoctorId!: number;

  constructor(private router: Router) {}

  goToPatient(id: number) {
    if (id) this.router.navigate(['/patients', id]);
  }

  goToUpdate(id: number) {
    if (id) this.router.navigate(['/patients', id, 'edit']);
  }

   goToDoctor(id: number) {
    if (id) {
      this.router.navigate(['/doctors', id]);
    }
  }
}
