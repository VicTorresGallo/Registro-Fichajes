import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCardContent, IonItem, IonCard, IonCardHeader, IonLabel, IonSpinner, IonCardTitle, IonCardSubtitle, IonNote } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import * as Leaflet from 'leaflet';
import {icon, Marker} from 'leaflet';
import{Geolocation} from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fichar',
  templateUrl: './fichar.page.html',
  styleUrls: ['./fichar.page.scss'],
  standalone: true,
  imports: [IonNote, IonCardSubtitle, IonCardTitle, IonLabel, IonCardHeader, IonCard, IonItem, IonCardContent, IonButton, IonContent, IonHeader, IonTitle, RouterModule, IonToolbar, CommonModule, FormsModule]
})
export class FicharPage implements OnInit {
  //Georeferenciacion
  latitud: any;
  longitud: any;
  direccionGeoreferenciada: any;
  urlNominatim: any;
 //Fichajes
  tieneFichajeActivo = false; // simula si el usuario ya fichó
  trabajos = [
    { id: 1, nombre: 'Mantenimiento' },
    { id: 2, nombre: 'Atención al cliente' },
    { id: 3, nombre: 'Limpieza' },
  ];
  
  trabajoSeleccionado: number | null = null;

  fechaHoraActual = new Date();

  fichajeActivo: any = {
    trabajo: 'Mantenimiento',
    fechaEntrada: new Date(Date.now() - 2 * 60 * 60 * 1000), // hace 2 horas
    latitud: '38.345',
    longitud: '-0.483'
  };

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.locate();  
  }

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

  //---------Geolocalización---------------

  async locate(){
    //obtener geoloc
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitud = coordinates.coords.latitude;
    this.longitud = coordinates.coords.longitude;
    console.log('Estás en la posición: ', coordinates);
    
    // obtener georef desde nominatim
    this.urlNominatim= 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + this.latitud + '&lon=' + this.longitud + '&adressdetails=1';
    this.http.get(this.urlNominatim).subscribe((data:any) => {
      this.direccionGeoreferenciada = data.display_name;
      console.log('Datos de Direccion: ', this.direccionGeoreferenciada);
    })

  }


 //--------------LEAFLET-------------------
  map?: Leaflet.Map;
 ngAfterViewInit() {  //Espera a que se cargue toda la vista para dibujar el mapa
  setTimeout(() => {
      this.leafletMap();
    }, 300);
  }

  leafletMap() {
    const iconRetinaUrl = 'assets/marker-icon-2x.png';
    const iconUrl = 'assets/marker-icon.png';
    const shadowUrl = 'assets/marker-shadow.png';

    const iconDefault = icon({
      iconRetinaUrl, iconUrl, shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    Marker.prototype.options.icon = iconDefault;

    if (this.map) {
      this.map.remove();
    }

    // Crea el mapa centrado en la posición
    this.map = Leaflet.map('mapid').setView([this.latitud, this.longitud], 12);

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    // Marcador principal
    Leaflet.marker([this.latitud, this.longitud])
      .addTo(this.map)
      .bindPopup('Ubicación actual')
      .openPopup();
  }

}