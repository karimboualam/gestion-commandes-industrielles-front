import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Ajoutez les modules nécessaires
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        console.log('Utilisateur connecté', response);
      },
      (error: { status: number; message: string }) => { // Typage explicite
        console.error('Erreur de connexion', error);
      }
    );
  }
  
}
