import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-commandes',
  standalone: true, // Indique que ce composant est autonome
  imports: [CommonModule, HttpClientModule], // Ajoute les modules nécessaires
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent {
  commandes: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCommandes().subscribe(
      (data) => {
        this.commandes = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des commandes', error);
      }
    );
  }

  createCommande() {
    console.log('Créer une nouvelle commande');
  }
  
  editCommande(commande: any) {
    console.log('Modifier commande :', commande);
  }
  
  deleteCommande(commandeId: number) {
    console.log('Supprimer commande avec ID :', commandeId);
  }
  
}
