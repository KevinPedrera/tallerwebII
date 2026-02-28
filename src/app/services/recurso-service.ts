import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Recurso } from '../models/recurso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecursoService {
  private http = inject(HttpClient);

  private API_URL = 'http://localhost:8080/recursos';

  private obtenerCabeceras(): HttpHeaders {
    const token = localStorage.getItem('token') || '';
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getRecursos(): Observable<Recurso[]> {
    return this.http.get<Recurso[]>(this.API_URL);
  }

  postRecurso(recurso: Recurso): Observable<any> {
    return this.http.post(this.API_URL, recurso, { headers: this.obtenerCabeceras() });
  }

  putRecurso(id: string | number, recurso: Recurso): Observable<any> {
    return this.http.put(`${this.API_URL}/${id}`, recurso, { headers: this.obtenerCabeceras() });
  }

  deleteRecurso(id: string | number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`, { headers: this.obtenerCabeceras() });
  }
}