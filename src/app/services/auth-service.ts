import {Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuario: User | null = null;
  private auth = getAuth();

  login(email:string, password:string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(resultado => {
        this.usuario = resultado.user;
        return resultado;
      });
  }

  registroAuth(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout(){
    signOut(this.auth);
    this.usuario=null;
  }
}