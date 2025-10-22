import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCardContent, IonItem, IonCard, IonCardHeader, IonLabel, IonSpinner, IonCardTitle } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-fichar',
  templateUrl: './fichar.page.html',
  styleUrls: ['./fichar.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonSpinner, IonLabel, IonCardHeader, IonCard, IonItem, IonCardContent, IonButton, IonContent, IonHeader, IonTitle, RouterModule, IonToolbar, CommonModule, FormsModule]
})
export class FicharPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
