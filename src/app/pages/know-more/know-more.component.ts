import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-know-more',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './know-more.component.html',
  styleUrl: './know-more.component.css'
})
export class KnowMoreComponent {

  constructor() {}

  ngOnInit(): void {
    // Scroll to top when the component loads
    window.scrollTo(0, 0);
  }
}
