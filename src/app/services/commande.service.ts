import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Service accessible dans toute l'application
})
export class CommandeService {
  private apiUrl = 'http://localhost:8080/api/commandes'; // URL backend pour les commandes

  constructor(private http: HttpClient) {}

  // Récupérer toutes les commandes (ADMIN)
  getAllCommandes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Récupérer les commandes de l'utilisateur connecté (USER)
  getUserCommandes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user`); // Assurez-vous que le backend gère cette route
  }

  // Ajouter une commande
  addCommande(commande: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, commande);
  }

  // Modifier une commande par ID
  updateCommande(id: number, commande: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, commande);
  }

  // Supprimer une commande par ID
  deleteCommande(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
