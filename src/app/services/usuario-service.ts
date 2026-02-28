import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private http = inject(HttpClient);

  private API_URL = 'http://localhost:8080/usuario';

  private obtenerCabeceras(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL, { headers: this.obtenerCabeceras() });
  }

  putUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put(`${this.API_URL}/${id}`, usuario, { headers: this.obtenerCabeceras() });
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`, { headers: this.obtenerCabeceras() });
  }

  getUsuarioPorEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/email/${email}`, { headers: this.obtenerCabeceras() });
  }

  inscribirCurso(usuarioId: number, cursoId: number): Observable<any> {
    return this.http.post(`${this.API_URL}/${usuarioId}/inscribir/${cursoId}`, {}, { headers: this.obtenerCabeceras() });
  }

  getProfesores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/profesores`, { headers: this.obtenerCabeceras() });
  }
}