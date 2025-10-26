import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonMenuButton, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonCard } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonCardHeader, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, RouterModule],
})
export class HomePage {
  constructor() {}
}
