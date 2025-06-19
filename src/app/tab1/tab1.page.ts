import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';
import { NgIf, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, NgIf, NgFor],
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss']
})
export class Tab1Page implements OnInit {
  characters: any[] = [];

  constructor(private api: RickAndMortyService, private router: Router) {}

  ngOnInit() {
    this.api.getCharacters().subscribe(data => {
      this.characters = data.results;
    });
  }

  openDetails(id: number) {
    this.router.navigate([`/tabs/tab2/${id}`]);
  }
}