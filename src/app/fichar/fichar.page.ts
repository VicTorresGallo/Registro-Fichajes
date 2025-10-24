import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCardContent, IonItem, IonCard, IonCardHeader, IonLabel, IonSpinner, IonCardTitle, IonCardSubtitle, IonNote } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-fichar',
  templateUrl: './fichar.page.html',
  styleUrls: ['./fichar.page.scss'],
  standalone: true,
  imports: [IonNote, IonCardSubtitle, IonCardTitle, IonSpinner, IonLabel, IonCardHeader, IonCard, IonItem, IonCardContent, IonButton, IonContent, IonHeader, IonTitle, RouterModule, IonToolbar, CommonModule, FormsModule]
})
export class FicharPage implements OnInit {

  tieneFichajeActivo = false; // simula si el usuario ya fichó
  trabajos = [
    { id: 1, nombre: 'Mantenimiento' },
    { id: 2, nombre: 'Atención al cliente' },
    { id: 3, nombre: 'Limpieza' },
  ];
  trabajoSeleccionado: number | null = null;

  fechaHoraActual = new Date();
  latitud = '38.345';     // valores simulados
  longitud = '-0.483';

  fichajeActivo: any = {
    trabajo: 'Mantenimiento',
    fechaEntrada: new Date(Date.now() - 2 * 60 * 60 * 1000), // hace 2 horas
    latitud: '38.345',
    longitud: '-0.483'
  };

  constructor() {}

  ngOnInit() {}

  iniciarFichaje() {
    console.log('Iniciando fichaje nuevo...');
    console.log('Trabajo:', this.trabajoSeleccionado);
    alert('Fichaje iniciado correctamente (simulado)');
    this.tieneFichajeActivo = true;
  }

  finalizarFichaje() {
    console.log('Finalizando fichaje activo...');
    alert('Fichaje cerrado correctamente (simulado)');
    this.tieneFichajeActivo = false;
  }
}