import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  // Méthode pour la connexion
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  // Méthode pour l'inscription
  register(nom: string, email: string, password: string, role: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { nom, email, password, role });
  }
  

  // Méthode pour la déconnexion
  logout() {
    localStorage.removeItem('token'); // Supprime le token JWT
    window.location.href = '/auth/login'; // Redirige l'utilisateur vers la page de connexion
  }

  // Méthode pour extraire le rôle à partir du token JWT
    getRoleFromToken(): string {
      const token = localStorage.getItem('token');
      if (!token) return ''; // Si aucun token n'existe, retourner une chaîne vide
  
      try {
        const payload = JSON.parse(atob(token.split('.')[1])); // Décoder la charge utile en base64
        return payload.role || ''; // Retourner le rôle
      } catch (error) {
        console.error('Erreur lors du décodage du token:', error);
        return ''; // Retourner une chaîne vide en cas d'erreur
      }
    }
}
