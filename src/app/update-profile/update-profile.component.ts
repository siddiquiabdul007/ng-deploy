import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent {
  user: any = {
    profilePicture: '',
    bio: '',
  };

  constructor(private router: Router) {}

  updateProfile() {
    // Implement your profile update logic here (e.g., save the updated profile data)
    // For simplicity, we'll assume the data is saved and proceed to login

    // After successfully updating the profile, navigate to the login page
    this.router.navigate(['/login']);
  }

  skipUpdate() {
    // Implement logic to skip the profile update and navigate to the login page
    this.router.navigate(['/login']);
  }

  onImageSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      // Handle the selected file (e.g., upload it to a server or process it)
      // You can store the image URL or data in the user object if needed.
    }
  }
}
