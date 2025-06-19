import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonApp } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, RouterOutlet],
  template: `
    <ion-app>
      <router-outlet></router-outlet>
    </ion-app>
  `
})
export class AppComponent {}
