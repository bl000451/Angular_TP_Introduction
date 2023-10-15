import { Component } from '@angular/core';

@Component({
  selector: 'app-devoirs',
  templateUrl: './devoirs.component.html',
  styleUrls: ['./devoirs.component.css']
})
export class DevoirsComponent {
  titre = "Enseignant du cour : Mr BUFFA"
  assignments = [
    {
      nom: "TP - Introduction",
      dateDeRendu: "05/10/2023",
      rendu: false
    },
    {
      nom: "Veille technologique",
      dateDeRendu: "22/01/2023",
      rendu: true
    },
    {
      nom: "TP4 - Android Studio",
      dateDeRendu: "15/08/2023",
      rendu: true
    },
  ]
}