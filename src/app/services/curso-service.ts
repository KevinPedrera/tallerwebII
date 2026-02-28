import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private http = inject(HttpClient);
  private API_URL = 'http://localhost:8080/cursos';

  private obtenerCabeceras(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getCursos(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL, { headers: this.obtenerCabeceras() });
  }
}