import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  
  private API_URL = 'http://localhost:8080';

  login(credenciales: any) {
    return this.http.post<any>(`${this.API_URL}/login`, credenciales).pipe(
      tap(respuesta => {
        if (respuesta && respuesta.token) {
          localStorage.setItem('token', respuesta.token);
          localStorage.setItem('perfil', respuesta.perfil);
          localStorage.setItem('email', respuesta.email);
        }
      })
    );
  }

  registroAuth(usuario: any) {
    return this.http.post<any>(`${this.API_URL}/usuario/registrarUsuario`, usuario);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('perfil');
    localStorage.removeItem('email');
  }

  get estaAutenticado(): boolean {
    return !!localStorage.getItem('token');
  }

  get perfilActual(): string | null {
    return localStorage.getItem('perfil');
  }
}