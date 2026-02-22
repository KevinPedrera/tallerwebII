import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { firebaseconfig } from '../../config/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

private dbURL = `${firebaseconfig.databaseURL}/usuarios`;

  constructor(private http: HttpClient) {}

  crearAuthUser(email: string, password: string) {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password);
  }

  postUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.dbURL}/${usuario.uid}.json`, usuario);
  }

  getUsuarioPorUid(uid: string): Observable<Usuario | null> {
    return this.http.get<Usuario | null>(`${this.dbURL}/${uid}.json`);
  }
}