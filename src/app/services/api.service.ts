import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api'; // Base URL de votre API back-end

  constructor(private http: HttpClient) {}

  // Exemple : Méthode pour récupérer toutes les commandes
  getCommandes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/commandes`);
  }

  // Exemple : Méthode pour créer une commande
  createCommande(commande: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/commandes`, commande);
  }
   // Ajoutez cette méthode pour récupérer les utilisateurs
   getUtilisateurs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/utilisateurs`);
  }
}
