export class Fichaje {
  IdFichaje!: number;
  FechaHoraEntrada!: Date;
  FechaHoraSalida?: Date | null;
  HorasTrabajadas?: number;
  IdTrabajo!: number;
  IdUsuario!: number;
  GeolocalizacionLatitud?: string;
  GeolocalizacionLongitud?: string;

  constructor(data?: Partial<Fichaje>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
