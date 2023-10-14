import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: { username: string, password: string, fullName: string, phone: string, email: string }[] = [];

  constructor() {}

  // Add a new user
  addUser(user: { username: string, password: string, fullName: string, phone: string, email: string }) {
    this.users.push(user);
  }

  // Get user by username, phone, or email
  getUserByIdentifier(identifier: string) {
    return this.users.find((user) => user.username === identifier || user.phone === identifier || user.email === identifier);
  }

  // Verify login credentials
  verifyLogin(identifier: string, password: string) {
    const user = this.getUserByIdentifier(identifier);
    if (user && user.password === password) {
      return true; // Credentials are valid
    }
    return false; // Credentials are invalid
  }

  // Change a user's password
  changePassword(identifier: string, newPassword: string) {
    const user = this.getUserByIdentifier(identifier);
    if (user) {
      // Update the user's password with the new one.
      user.password = newPassword;
      return true; // Password changed successfully
    }
    return false; // User not found or password not changed
  }
}
