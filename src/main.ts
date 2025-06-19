import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/tabs/tabs.routes'; 
import { AppComponent } from './app/app.component';
import { provideIonicAngular } from '@ionic/angular/standalone';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()), 
    provideHttpClient(),
    provideIonicAngular({})
  ]
}).catch(err => console.error(err));