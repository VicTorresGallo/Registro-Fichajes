export class Usuario {
  IdUsuario!: number;
  Nombre!: string;
  Usuario!: string;
  Clave?: string;   // Opcional para no exponer la contraseña en todas partes
  Rol!: 'ADMIN' | 'USER';

  constructor(data?: Partial<Usuario>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}