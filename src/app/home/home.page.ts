import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonMenuButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuButton, RouterModule],
})
export class HomePage {
  constructor() {}
}
