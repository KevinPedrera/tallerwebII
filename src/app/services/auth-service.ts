import {Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuario: User | null = null;
  private auth = getAuth();

  //Metodo Login

  login(email:string, password:string){
    signInWithEmailAndPassword(this.auth, email, password)
    .then(resultado => this.usuario= resultado.user)
    .catch(err => console.error(`login Fallido`, err.message));
  }

  logout(){
    signOut(this.auth);
    this.usuario=null;
  }
}