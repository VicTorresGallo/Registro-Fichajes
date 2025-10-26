import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Fichaje } from '../models/fichaje';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  basePath = 'http://localhost:8080/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("Ha ocurrido un error:", error.error.message);
    } else {
      console.error(`Código de Error: ${error.status}, Body: ${error.error}`);
    }
    return throwError(() => new Error('Ha sucedido un problema, inténtalo más tarde'));
  }

  // -----------USUARIOS--------------


  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.basePath}usuarios`)
      .pipe(retry(1), catchError(this.handleError));
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.basePath}usuarios?id=${id}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.basePath}usuarios`, usuario, this.httpOptions)
      .pipe(catchError(this.handleError));
  }


  //-----------------FICHAJES----------------


  getFichajesUsuario(idUsuario: number): Observable<Fichaje[]> {
    return this.http.get<Fichaje[]>(`${this.basePath}fichajes?idUsuario=${idUsuario}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  createFichaje(fichaje: Fichaje): Observable<Fichaje> {
    return this.http.post<Fichaje>(`${this.basePath}fichajes`, fichaje, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  cerrarFichaje(fichaje: Fichaje): Observable<Fichaje> {
    return this.http.put<Fichaje>(`${this.basePath}fichajes`, fichaje, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // --------------------LOGIN----------------------

  login(usuario: string, clave: string): Observable<any> {
    return this.http.post<any>(`${this.basePath}login`, { usuario, clave }, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

}
