// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { AppointmentService } from '../services/appointment.service';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-book-appointment',
//   standalone: true,
//   imports: [CommonModule, FormsModule, RouterModule],
//   templateUrl: './book-appointment.component.html',
//   styleUrls: ['./book-appointment.component.css']
// })
// export class BookAppointmentComponent {
//   appointment = { patientName: '', doctorName: '', date: '', time: '', reason: '' };

//   constructor(private service: AppointmentService) {}

//   book() {
//     this.service.bookAppointment(this.appointment).subscribe(() => {
//       alert('Appointment booked successfully!');
//       this.appointment = { patientName: '', doctorName: '', date: '', time: '', reason: '' };
//     });
//   }
// }








import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../services/appointment.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent {

  appointment = {
    patient: { name: '', age: '', gender: '', phone: '', email: '' },
    doctorName: '',
    date: '',
    time: '',
    reason: ''
  };

  constructor(private service: AppointmentService) {}

  book() {
    this.service.bookAppointment(this.appointment).subscribe(() => {
      alert('Appointment + Patient saved successfully!');
      this.appointment = {
        patient: { name: '', age: '', gender: '', phone: '', email: '' },
        doctorName: '',
        date: '',
        time: '',
        reason: ''
      };
    });
  }
}


