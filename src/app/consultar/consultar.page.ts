import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonListHeader, IonLabel, IonItem, IonIcon, IonCardContent, IonCard } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.page.html',
  styleUrls: ['./consultar.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonIcon, IonItem, IonLabel, IonListHeader, IonList, IonButton, IonContent, IonHeader, RouterModule, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ConsultarPage implements OnInit {

  fechaSeleccionada: string = new Date().toISOString(); // por defecto hoy
  fichajes: any[] = []; // todos los fichajes (simulados)
  fichajesFiltrados: any[] = []; // fichajes del día

  constructor() {}

  ngOnInit() {
    // Datos simulados (más adelante vendrán del backend)
    this.fichajes = [
      {
        id: 1,
        trabajo: 'Mantenimiento',
        fechaHoraEntrada: new Date(),
        fechaHoraSalida: new Date(Date.now() + 3 * 60 * 60 * 1000),
        latitud: '38.345',
        longitud: '-0.483'
      },
      {
        id: 2,
        trabajo: 'Atención al cliente',
        fechaHoraEntrada: new Date(Date.now() - 86400000), // ayer
        fechaHoraSalida: new Date(Date.now() - 86400000 + 4 * 60 * 60 * 1000),
        latitud: '38.346',
        longitud: '-0.484'
      }
    ];

    this.filtrarPorFecha();
  }

  filtrarPorFecha() {
    const fechaBase = new Date(this.fechaSeleccionada);
    this.fichajesFiltrados = this.fichajes.filter(f => {
      const fechaFichaje = new Date(f.fechaHoraEntrada);
      return (
        fechaFichaje.getFullYear() === fechaBase.getFullYear() &&
        fechaFichaje.getMonth() === fechaBase.getMonth() &&
        fechaFichaje.getDate() === fechaBase.getDate()
      );
    });
  }

  verMapa(fichaje: any) {
    alert(`Mapa (simulado): ${fichaje.latitud}, ${fichaje.longitud}`);
  }
}