import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CommandesComponent } from './commandes/commandes.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: 'auth/login', component: LoginComponent },
    { path: 'auth/register', component: RegisterComponent },
    { path: 'commandes', component: CommandesComponent },
    { path: 'utilisateurs', component: UtilisateursComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' } // Redirection par défaut
  ];