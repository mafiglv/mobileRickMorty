import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { NgIf } from '@angular/common';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, NgIf],
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss']
})
export class Tab2Page implements OnInit {
  private route = inject(ActivatedRoute);
  private api = inject(RickAndMortyService);
  character: any;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getCharacterById(id).subscribe(data => {
      this.character = data;
    });
  }
}