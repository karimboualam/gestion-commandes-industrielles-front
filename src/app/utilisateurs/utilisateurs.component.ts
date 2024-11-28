import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-utilisateurs',
  standalone: true,
  imports: [],
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.css'
})
export class UtilisateursComponent {
  utilisateurs: any[] = [];

constructor(private apiService: ApiService) {}

ngOnInit() {
  this.apiService.getUtilisateurs().subscribe((data: any) => {
    this.utilisateurs = data;
  });
}


}
