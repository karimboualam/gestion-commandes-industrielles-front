import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/auth/login']); // Redirection vers la page de connexion si non connecté
      return false;
    }

    const userRole = this.authService.getUserRole();
    const requiredRole = route.data['role'];

    if (requiredRole && userRole !== requiredRole) {
      this.router.navigate(['/auth/login']); // Redirection si le rôle ne correspond pas
      return false;
    }

    return true;
  }
}
