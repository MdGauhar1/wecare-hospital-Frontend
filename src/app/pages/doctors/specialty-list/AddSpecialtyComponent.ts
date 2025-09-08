// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { SpecialtyService } from '../../../services/specialty.service';
// import { Specialty } from '../specialty.model';

// @Component({
//   selector: 'app-add-specialty',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   template: `
//     <div class="add-specialty">
//       <h2>Add New Specialty</h2>
//       <input [(ngModel)]="newName" placeholder="Enter specialty name" />
//       <button (click)="addSpecialty()">Save</button>
//     </div>
//   `,
//   styles: [`
//     .add-specialty { max-width: 400px; margin: 20px auto; text-align: center; }
//     input { width: 100%; padding: 8px; margin: 10px 0; }
//     button { padding: 8px 16px; background: #0360c4; color: #fff; border: none; border-radius: 6px; }
//   `]
// })
// export class AddSpecialtyComponent {
//   newName: string = '';

//   constructor(private specialtyService: SpecialtyService) {}

//   addSpecialty(): void {
//     if (!this.newName.trim()) return;

//     const newSpec: Partial<Specialty> = { name: this.newName };
//     this.specialtyService.create(newSpec as Specialty).subscribe({
//       next: () => {
//         this.newName = '';
//         alert('Specialty added successfully!');
//       },
//       error: (err) => console.error('Error adding specialty:', err)
//     });
//   }
// }












import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpecialtyService } from '../../../services/specialty.service';
import { Specialty } from '../specialty.model';

@Component({
  selector: 'app-add-specialty',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-specialty.component.html',
  styleUrls: ['./add-specialty.component.css']
})
export class AddSpecialtyComponent {
  newName: string = '';

  constructor(private specialtyService: SpecialtyService) {}

  addSpecialty(): void {
    if (!this.newName.trim()) return;

    const newSpec: Partial<Specialty> = { name: this.newName };
    this.specialtyService.create(newSpec as Specialty).subscribe({
      next: () => {
        this.newName = '';
        alert('Specialty added successfully!');
      },
      error: (err) => console.error('Error adding specialty:', err)
    });
  }
}
