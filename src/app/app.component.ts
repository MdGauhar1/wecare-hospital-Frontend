import { Component } from '@angular/core';
import {
  Router,
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ID variables
  findId!: number;
  updateId!: number;
  findDoctorId!: number;

  // Mobile menu & dropdown tracking
  menuOpen: boolean = false;
  openDropdown: string | null = null;

  constructor(private router: Router) {}

  // Toggle mobile menu
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.openDropdown = null; // close dropdown when menu toggles
  }

  // // Close mobile menu when a link is clicked
  // closeMenuIfMobile(event: any) {
  //   if (window.innerWidth <= 768 && event.target.tagName === 'A') {
  //     this.menuOpen = false;
  //     this.openDropdown = null;
  //   }
  // }

  // Toggle dropdowns on mobile
  toggleDropdown(dropdown: string) {
    if (window.innerWidth <= 768) {
      this.openDropdown = this.openDropdown === dropdown ? null : dropdown;
    }
  }

  // Routing methods
  goToPatient(id: number) {
    if (id) this.router.navigate(['/patients', id]);
  }

  goToUpdate(id: number) {
    if (id) this.router.navigate(['/patients', id, 'edit']);
  }

  goToDoctor(id: number) {
    if (id) this.router.navigate(['/doctors', id]);
  }

  goToKnowMore() {
    // Implement navigation to 'Know Us' page
    this.router.navigate(['/know-us']); // adjust route if needed
  }

  goToBookAppointment() {
    this.router.navigate(['/book-appointment']);
  }






  closeMenuIfMobile(event: any) {
  if (window.innerWidth <= 768) {
    const tag = event.target.tagName;
    const isDropdownToggle = event.target.classList.contains('dropbtn');

    if (tag === 'A' && !isDropdownToggle) {
      this.menuOpen = false;
      this.openDropdown = null;
    }
  }
}

}
