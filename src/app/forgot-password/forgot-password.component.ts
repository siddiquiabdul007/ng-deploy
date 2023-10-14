import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service'; // Import your UserService

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  emailOrPhone: string = '';
  otp: string = '';
  newPassword: string = '';
  showResetPassword: boolean = false;

  constructor(private router: Router, private userService: UserService) {}

  sendOTP() {
    // Implement the logic to send an OTP to the provided email/phone.
    // You can use a service or an API call here.

    // Upon successful OTP send, show the reset password form.
    this.showResetPassword = true;
  }

  resetPassword() {
    // Implement the logic to verify the OTP and reset the password.
    // Assuming the password reset was successful, update the password and navigate to the login page.
  
    if (this.userService.changePassword(this.emailOrPhone, this.newPassword)) {
      // Password changed successfully, navigate to the login page.
      this.router.navigate(['/login']);
    } else {
      // Password change failed. Handle the error as needed.
    }
  }  
}
