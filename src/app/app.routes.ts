import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CommandesComponent } from './commandes/commandes.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminCommandesComponent } from './admin-commandes/admin-commandes.component';
import { UserCommandesComponent } from './user-commandes/user-commandes.component';
import { AuthGuard } from './guards/auth.guard'; // Assurez-vous que le chemin est correct



export const routes: Routes = [
  // Routes publiques
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },

  // Routes protégées pour les utilisateurs
  {
    path: 'user/commandes',
    component: UserCommandesComponent,
    canActivate: [AuthGuard],
    data: { role: 'USER' }, // Accessible uniquement aux utilisateurs avec le rôle USER
  },

  // Routes protégées pour les administrateurs
  {
    path: 'admin/commandes',
    component: AdminCommandesComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN' }, // Accessible uniquement aux administrateurs
  },

  // Route pour tous les utilisateurs connectés
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard], // Accessible à tous les utilisateurs connectés
  },

  // Route pour afficher la liste des utilisateurs (exemple d'admin-only)
  {
    path: 'utilisateurs',
    component: UtilisateursComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN' }, // Accessible uniquement aux administrateurs
  },

  // Redirection par défaut
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

  // Gestion des URL non reconnues
  { path: '**', redirectTo: '/auth/login' },
];
