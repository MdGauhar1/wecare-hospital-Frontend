import { Component } from '@angular/core';
import {
  Router,
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common'; // <-- important for *ngIf

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    FormsModule,
    NgIf // <-- add NgIf here
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
    this.router.navigate(['/know-us']);
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

  // Popup logic
  showPopup = false;

  ngOnInit() {
    const path = this.router.url;
    // Show only on home page
    if (path === '/' || path === '/index.html') {
      this.showPopup = true;
    }
  }

  closePopup() {
    this.showPopup = false;
  }
}
