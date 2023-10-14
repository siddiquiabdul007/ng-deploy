import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user = {
    email: '',
    password: '',
    username: '',
    fullName: '',
    phone: '',
  };

  passwordStrength: number = 0;
  passwordStrengthText: string = '';

  constructor(private userService: UserService, private router: Router) {}

  checkPasswordStrength() {
    const password = this.user.password;
    const hasUpperCase = /[A-Z]/.test(password) ? 1 : 0;
    const hasLowerCase = /[a-z]/.test(password) ? 1 : 0;
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|/\\-]/.test(password) ? 1 : 0;
    const isLengthValid = password.length >= 8 && password.length <= 30 ? 1 : 0;

    const strength = (hasUpperCase + hasLowerCase + hasSpecialChar + isLengthValid) * 25;
    this.passwordStrength = strength;

    if (strength <= 25) {
      this.passwordStrengthText = 'Weak';
    } else if (strength <= 50) {
      this.passwordStrengthText = 'Moderate';
    } else if (strength <= 75) {
      this.passwordStrengthText = 'Strong';
    } else {
      this.passwordStrengthText = 'Very Strong';
    }
  }

  signup() {
    // Implement your signup logic here
    this.userService.addUser({
      username: this.user.username,
      password: this.user.password,
      fullName: this.user.fullName,
      phone: this.user.phone,
      email: this.user.email,
    });

    // Redirect to the "update-profile" page instead of the login page
    this.router.navigate(['/update-profile']);
  }
}
