import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf
import { AuthService } from './services/auth.service'; // Import AuthService

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // Add CommonModule for *ngIf
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gestion-commandes-industrielles-front';

  // Make authService public for use in the template
  constructor(public authService: AuthService, private router: Router) {}

  // Method for logout
  onLogout() {
    this.authService.logout(); // Perform logout
    this.router.navigate(['/auth/login']); // Redirect to login page
  }
}
