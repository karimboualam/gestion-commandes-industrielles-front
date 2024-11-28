import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import de FormsModule


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

constructor(private authService: AuthService) {}

onRegister() {
  this.authService.register(this.nom, this.email, this.password).subscribe(
    (response) => {
      console.log('Utilisateur inscrit', response);
    },
    (error) => {
      console.error('Erreur d\'inscription', error);
    }
  );
}


}
