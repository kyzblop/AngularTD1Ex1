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
    {"nom" : "Dr", "prenom" : "Who", "age" : 1500},
    {"nom" : "Maitre", "prenom" : "Karine", "age" : 900}
  ]

  choixClasse(isFirst: boolean, isLast: boolean){
    var ma_classe:string=""
    if(isFirst || isLast) {
      ma_classe="first_last"
    }
    return ma_classe;
  }

  choixClasse2(isEven: boolean){
    var ma_classe2:string=""
    if(isEven){
      ma_classe2="pair"
    } else {
      ma_classe2="impair"
    }
    return ma_classe2;
  }

}
