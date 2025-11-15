
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    // Step 1: Register the user
    this.http.post<any>("http://localhost:8082/api/patients/register", this.user)
      .subscribe({
        next: () => {
          // Step 2: Automatically login after successful registration
          this.http.post<any>("http://localhost:8082/api/auth/login", {
            username: this.user.username,
            password: this.user.password
          }).subscribe({
            next: (res) => {
              localStorage.setItem('token', res.token); // store token
              alert("Registration successful! You are now logged in.");
              this.router.navigate(['/']); // redirect to logged-in home page
            },
            error: () => {
              this.msg = "Registration succeeded, but auto-login failed!";
              this.router.navigate(['/login']); // fallback to login page
            }
          });
        },
        error: () => {
          this.msg = "Something went wrong during registration!";
        }
      });
  }
}
