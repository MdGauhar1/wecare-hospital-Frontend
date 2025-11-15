import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

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
  returnUrl: string = '/'; // default redirect

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Read returnUrl from query params if present
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.http.post('http://localhost:8082/api/auth/login', {
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token); // store token
        alert("Login Successful!");
        this.router.navigate([this.returnUrl]); // redirect to intended page or home
      },
      error: () => {
        this.error = "Invalid username or password!";
      }
    });
  }
}
