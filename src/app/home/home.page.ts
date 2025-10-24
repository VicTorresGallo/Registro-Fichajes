import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonMenuButton, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCardTitle, IonCardSubtitle, IonCardContent, IonCardHeader, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, RouterModule],
})
export class HomePage {
  constructor() {}
}
