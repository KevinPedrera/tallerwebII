import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private http = inject(HttpClient);

  private API_URL = 'https://app-fire-73d6f-default-rtdb.firebaseio.com';

  getUsuarios(): Observable<any[]> {
    return this.http
      .get<{ [key: string]: any }>(`${this.API_URL}/usuarios.json`)
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

  postUsuario(usuario: any): Observable<any> {
    return this.http.post(`${this.API_URL}/usuarios.json`, usuario);
  }

  putUsuario(id: string, usuario: any): Observable<any> {
    return this.http.put(`${this.API_URL}/usuarios/${id}.json`, usuario);
  }

  deleteUsuario(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/usuarios/${id}.json`);
  }

}
