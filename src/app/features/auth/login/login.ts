import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email:string='';
  password:string='';

  private servicioAuth = inject(AuthService);

  iniciarSesion(){
    this.servicioAuth.login(this.email, this.password);
    alert('Bienvenido al sistema');
  }

  cerrarSesion(){
    this.servicioAuth.logout();
  }
}
