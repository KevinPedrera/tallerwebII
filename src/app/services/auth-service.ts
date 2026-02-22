import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuario: User | null = null;
  private auth = getAuth();

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(resultado => {
        this.usuario = resultado.user;
        return resultado.user;
      });
  }

  logout() {
    return signOut(this.auth).then(() => {
      this.usuario = null;
    });
  }
}