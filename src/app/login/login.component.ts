import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private http: HttpClient) {}

  login() {
    this.http.post('http://localhost:8082/api/auth/login', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        alert("Login Successful!");
      },
      error: () => {
        this.error = "Invalid username or password!";
      }
    });
  }
}
