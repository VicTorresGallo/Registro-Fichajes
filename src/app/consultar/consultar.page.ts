import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList,
  IonListHeader, IonLabel, IonItem, IonIcon, IonCardContent, IonCard, IonDatetime } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { ApiService } from '../services/api';
import { Fichaje } from '../models/fichaje';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.page.html',
  styleUrls: ['./consultar.page.scss'],
  standalone: true,
  imports: [IonDatetime, 
    IonCard, IonCardContent, IonIcon, IonItem, IonLabel, IonListHeader,
    IonList, IonButton, IonContent, IonHeader, RouterModule, IonTitle,
    IonToolbar, CommonModule, FormsModule
  ]
})
export class ConsultarPage implements OnInit {

  fechaSeleccionada: string = new Date().toISOString(); // Hoy por defecto
  fichajes: Fichaje[] = [];
  fichajesFiltrados: Fichaje[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.cargarFichajes();
  }

  cargarFichajes() {
    const idUsuario = 5;
    this.apiService.getFichajesUsuario(idUsuario).subscribe({
      next: (res: Fichaje[]) => {
        console.log('📦 Fichajes cargados:', res);
        this.fichajes = res.map(f => ({
          ...f,
          FechaHoraEntrada: new Date(f.FechaHoraEntrada),
          FechaHoraSalida: f.FechaHoraSalida ? new Date(f.FechaHoraSalida) : null
        }));
        this.filtrarPorFecha();
      },
      error: (err: any) => {
        console.error('Error al cargar fichajes:', err);
      }
    });
  }
  onFechaChange(event: any) {
    this.fechaSeleccionada = event.detail.value.substring(0, 10); // YYYY-MM-DD
    this.filtrarPorFecha();
  }

  filtrarPorFecha() {
    if (!this.fechaSeleccionada) return;

    const fechaBase = new Date(this.fechaSeleccionada);
    const año = fechaBase.getFullYear();
    const mes = fechaBase.getMonth();
    const dia = fechaBase.getDate();

    this.fichajesFiltrados = this.fichajes.filter(f => {
      const fechaEntrada = new Date(f.FechaHoraEntrada);
      return fechaEntrada.getFullYear() === año &&
             fechaEntrada.getMonth() === mes &&
             fechaEntrada.getDate() === dia;
    });

    console.log('📅 Filtro aplicado:', fechaBase, this.fichajesFiltrados);
  }
}
