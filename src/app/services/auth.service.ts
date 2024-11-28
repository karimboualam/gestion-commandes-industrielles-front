import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  // Méthode pour la connexion
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }
  // Méthode pour l'inscription
  register(nom: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { nom, email, password });
  }
   // Méthode pour la déconnexion
   logout() {
    localStorage.removeItem('token'); // Supprime le token JWT
    window.location.href = '/auth/login'; // Redirige l'utilisateur vers la page de connexion
  }
}
