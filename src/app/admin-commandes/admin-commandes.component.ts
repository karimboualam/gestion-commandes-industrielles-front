import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-admin-commandes',
  standalone: true,
  imports: [],
  templateUrl: './admin-commandes.component.html',
  styleUrl: './admin-commandes.component.css'
})
export class AdminCommandesComponent implements OnInit {
  commandes: any[] = []; // Liste des commandes

  constructor(private commandeService: CommandeService) {}

  ngOnInit(): void {
    this.getAllCommandes();
  }

  getAllCommandes() {
    this.commandeService.getAllCommandes().subscribe(
      (data) => {
        this.commandes = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des commandes:', error);
      }
    );
  }

  onAddCommande() {
    // Logique pour ajouter une commande (exemple : afficher un formulaire modal)
  }

  onEditCommande(commande: any) {
    // Logique pour modifier une commande (exemple : afficher un formulaire modal pré-rempli)
  }

  onDeleteCommande(id: number) {
    this.commandeService.deleteCommande(id).subscribe(
      () => {
        this.getAllCommandes(); // Rechargez la liste après suppression
      },
      (error) => {
        console.error('Erreur lors de la suppression de la commande:', error);
      }
    );
  }
}