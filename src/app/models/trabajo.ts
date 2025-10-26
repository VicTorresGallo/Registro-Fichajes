export class Trabajo {
  IdTrabajo!: number;
  Nombre!: string;

  constructor(data?: Partial<Trabajo>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}