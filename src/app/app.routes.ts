import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CommandesComponent } from './commandes/commandes.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminCommandesComponent } from './admin-commandes/admin-commandes.component'; // Component pour les commandes admin
import { UserCommandesComponent } from './user-commandes/user-commandes.component'; // Component pour les commandes utilisateur

export const routes: Routes = [
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'user/commandes', component: UserCommandesComponent }, // Commandes utilisateur
  { path: 'admin/commandes', component: AdminCommandesComponent }, // Commandes admin
  { path: 'utilisateurs', component: UtilisateursComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', redirectTo: 'auth/login' }, // Gestion des URL non reconnues
];
