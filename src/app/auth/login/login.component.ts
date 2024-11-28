import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'; // Import du Router
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule, HttpClientModule], // Ajoutez les modules nécessaires
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {} // Injection de Router

  onLogin() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        console.log('Utilisateur connecté', response);
        // Stockez le token dans le localStorage
        localStorage.setItem('token', response.token);
        // Redirection vers les commandes
        this.router.navigate(['/commandes']);
        
      },
      (error) => {
        console.error('Erreur de connexion', error);
      }
    );
  }
  
  
}
