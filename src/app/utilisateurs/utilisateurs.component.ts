import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-utilisateurs',
  standalone: true,
  imports: [CommonModule], // Ajoutez CommonModule ici
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.css'
})
export class UtilisateursComponent {
  utilisateurs: any[] = [];

constructor(private apiService: ApiService) {}

ngOnInit() {
  this.apiService.getUtilisateurs().subscribe((data: any) => {
    this.utilisateurs = data;
  });
}

createUtilisateur() {
  console.log('Créer un nouvel utilisateur');
}

editUtilisateur(utilisateur: any) {
  console.log('Modifier utilisateur :', utilisateur);
}

deleteUtilisateur(utilisateurId: number) {
  console.log('Supprimer utilisateur avec ID :', utilisateurId);
}


}
