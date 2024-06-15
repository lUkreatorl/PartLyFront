import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  confirmPass: string = '';
  isRegister: boolean = false;


  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        console.log('Login successful', response);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }

  register() {
    if (this.password !== this.confirmPass) {
      alert('Passwords do not match');
      return;
    }
    this.authService.register(this.email, this.email, this.password).subscribe(
      response => {
        console.log('Registration successful', response);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}
