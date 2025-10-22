import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.page.html',
  styleUrls: ['./consultar.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, RouterModule, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ConsultarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
