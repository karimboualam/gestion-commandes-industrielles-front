import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service'; // Chemin vers AuthService


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestion-commandes-industrielles-front';
  constructor(private authService: AuthService) {}

  // Appelle la méthode de déconnexion
  onLogout() {
    this.authService.logout();
  }
}
