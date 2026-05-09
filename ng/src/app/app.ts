import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card p-4 shadow-sm border-0">
            
            <!-- Success View -->
            <div *ngIf="isLoggedIn">
              <div class="text-center py-3">
                <div class="mb-3 text-success">
                  <!-- Using a simple text checkmark -->
                  <h1 style="font-size: 4rem;">✓</h1>
                </div>
                <h3 class="fw-bold mb-2">Login Successful!</h3>
                <p class="text-muted mb-4">Welcome back to your account.</p>
                <div class="d-grid">
                  <button class="btn btn-primary" (click)="logout()">Logout</button>
                </div>
              </div>
            </div>

            <!-- Auth Forms -->
            <div *ngIf="!isLoggedIn">
              <!-- Login View -->
              <div *ngIf="isLoginView">
                <h3 class="fw-bold mb-3">Login</h3>
                <div class="mb-3">
                  <label class="form-label">Username</label>
                  <input type="text" class="form-control" [(ngModel)]="loginData.username" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input type="password" class="form-control" [(ngModel)]="loginData.password" />
                </div>
                <div class="d-grid">
                  <button class="btn btn-primary" (click)="login()">Login</button>
                </div>
                <p class="mt-3 text-center">
                  Don't have an account? <a href="#" (click)="toggleView($event)">Register</a>
                </p>
              </div>

              <!-- Register View -->
              <div *ngIf="!isLoginView">
                <h3 class="fw-bold mb-3">Register</h3>
                <div class="mb-3">
                  <label class="form-label">Username</label>
                  <input type="text" class="form-control" [(ngModel)]="registerData.username" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input type="password" class="form-control" [(ngModel)]="registerData.password" />
                </div>
                <div class="d-grid">
                  <button class="btn btn-success" (click)="register()">Register</button>
                </div>
                <p class="mt-3 text-center">
                  Already have an account? <a href="#" (click)="toggleView($event)">Login</a>
                </p>
              </div>

              <!-- Message feedback -->
              <div class="mt-3 text-center small" [ngClass]="messageClass">{{ message }}</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 500px;
      }
      .btn-primary {
        background-color: #4f46e5;
        border-color: #4f46e5;
      }
      .btn-success {
        background-color: #22c55e;
        border-color: #22c55e;
      }
    `,
  ],
})
export class App {
  isLoginView = true;
  isLoggedIn = false;
  loginData = { username: '', password: '' };
  registerData = { username: '', password: '' };
  users = [{ username: 'admin', password: 'admin' }];
  message = '';
  messageClass = '';

  toggleView(event: Event) {
    event.preventDefault();
    this.isLoginView = !this.isLoginView;
    this.message = '';
  }

  register() {
    const exists = this.users.some((u) => u.username === this.registerData.username);
    if (exists) {
      this.message = 'Username already taken!';
      this.messageClass = 'text-danger';
    } else {
      this.users.push({ ...this.registerData });
      this.message = 'Registered successfully! You can now login.';
      this.messageClass = 'text-success';
      setTimeout(() => {
        this.isLoginView = true;
        this.message = '';
        this.registerData = { username: '', password: '' };
      }, 1500);
    }
  }

  login() {
    const user = this.users.find(
      (u) => u.username === this.loginData.username && u.password === this.loginData.password,
    );
    if (user) {
      this.isLoggedIn = true;
      this.message = '';
    } else {
      this.message = 'Invalid username or password!';
      this.messageClass = 'text-danger';
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.loginData = { username: '', password: '' };
  }
}

