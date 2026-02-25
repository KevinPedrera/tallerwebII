import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Recurso } from '../models/recurso';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecursoService {
  private http = inject(HttpClient);

  // Tu misma URL de Firebase
  private API_URL = 'https://app-fire-73d6f-default-rtdb.firebaseio.com';

  getRecursos(): Observable<Recurso[]> {
    return this.http
      .get<{ [key: string]: Recurso }>(`${this.API_URL}/recursos.json`)
      .pipe(
        map(respuesta => {
          if (!respuesta) return [];
          return Object.keys(respuesta).map(id => ({
            id,
            ...respuesta[id]
          }));
        })
      );
  }

  postRecurso(recurso: Recurso): Observable<any> {
    return this.http.post(`${this.API_URL}/recursos.json`, recurso);
  }

  putRecurso(id: string, recurso: Recurso): Observable<any> {
    return this.http.put(`${this.API_URL}/recursos/${id}.json`, recurso);
  }

  deleteRecurso(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/recursos/${id}.json`);
  }
}
