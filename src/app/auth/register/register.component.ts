import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  nom: string = '';
email: string = '';
password: string = '';

constructor(private authService: AuthService) {}

onRegister() {
  this.authService.register(this.nom, this.email, this.password).subscribe((response) => {
    console.log('Utilisateur inscrit', response);
  });
}


}
