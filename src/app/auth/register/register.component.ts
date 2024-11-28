import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import de FormsModule
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ajoutez FormsModule ici
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  nom: string = '';
email: string = '';
password: string = '';
isAdmin: boolean = false; // Permet de définir si l'utilisateur est un administrateur



constructor(private authService: AuthService, private router: Router) {}

onRegister() {
  const role = this.isAdmin ? 'ADMIN' : 'USER'; // Mappez isAdmin à un rôle
  this.authService.register(this.nom, this.email, this.password, role).subscribe(
    (response) => {
      console.log('Utilisateur inscrit', response);
      this.router.navigate(['/auth/login']); // Redirection après inscription
    },
    (error) => {
      console.error('Erreur d\'inscription', error);
    }
  );
}



}
