import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Titre du TD1Ex1';

  nom:string="Jean"
  verif:boolean= false

  element:number = 2

  etudiant:any[] = [
    {"nom" : "Martin", "prenom" : "Leo", "age" : 15},
    {"nom" : "Nulos", "prenom" : "Guillaume", "age" : 75},
    {"nom" : "Dr", "prenom" : "Who", "age" : 1500}

  ]
}
