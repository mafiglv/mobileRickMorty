import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent,
  IonAvatar,
  IonItem,
  IonLabel,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { school, person, logoIonic, logoGithub } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardContent,
    IonAvatar,
    IonItem,
    IonLabel,
    IonIcon
  ],
})
export class Tab3Page {
  aluno = {
    nome: 'Germária Lins Vilela',
    turma: '4NA',
    curso: 'Análise e Desenvolvimento de Sistemas',
    avatar: 'https://img.icons8.com/ios-filled/100/000000/user-female-circle.png'
  };

  constructor() {
    addIcons({ school, person, logoIonic, logoGithub });
  }
}