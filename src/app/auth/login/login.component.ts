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
    console.log('Tentative de connexion avec :', this.email, this.password);
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        console.log('Réponse reçue du backend :', response);
  
        // Stockez le token dans le localStorage
        localStorage.setItem('token', response.token);
  
        // Utilisez le rôle pour rediriger
        const role = response.role;
        if (role === 'ADMIN') {
          this.router.navigate(['/admin/commandes']);
        } else if (role === 'USER') {
          this.router.navigate(['/user/commandes']);
        }
      },
      (error) => {
        console.error('Erreur de connexion :', error);
        alert('Échec de la connexion. Vérifiez vos informations.');
      }
    );
  }
  
  
  
}
