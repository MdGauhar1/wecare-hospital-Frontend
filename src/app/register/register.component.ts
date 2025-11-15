import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
  
})
export class RegisterComponent {

  user = {
    name: '',
    age: 0,
    gender: '',
    phone: '',
    email: '',
    username: '',
    password: ''
  };

  msg = '';

  constructor(private http: HttpClient) {}

  register() {
    this.http.post("http://localhost:8082/api/patients/register", this.user)
      .subscribe({
        next: () => this.msg = "Registration successful!",
        error: () => this.msg = "Something went wrong!"
      });
  }
}
