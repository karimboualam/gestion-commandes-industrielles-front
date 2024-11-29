import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';


@Component({
  selector: 'app-user-commandes',
  standalone: true,
  imports: [],
  templateUrl: './user-commandes.component.html',
  styleUrl: './user-commandes.component.css'
})
export class UserCommandesComponent  implements OnInit {
  commandes: any[] = []; // Liste des commandes utilisateur

  constructor(private commandeService: CommandeService) {}

  ngOnInit(): void {
    this.getUserCommandes();
  }

  getUserCommandes() {
    this.commandeService.getUserCommandes().subscribe(
      (data) => {
        this.commandes = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des commandes:', error);
      }
    );
  }

  onAddCommande() {
    // Logique pour ajouter une commande
  }

  onEditCommande(commande: any) {
    // Logique pour modifier une commande
  }

  onDeleteCommande(id: number) {
    this.commandeService.deleteCommande(id).subscribe(
      () => {
        this.getUserCommandes(); // Rechargez la liste après suppression
      },
      (error) => {
        console.error('Erreur lors de la suppression de la commande:', error);
      }
    );
  }
}

