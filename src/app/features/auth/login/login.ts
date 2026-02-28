import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';
  mostrarPassword: boolean = false;
  cargando: boolean = false;
  mensajeError: string = '';

  private servicioAuth = inject(AuthService);
  private router = inject(Router);

  togglePassword() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  iniciarSesion() {
    this.mensajeError = '';

    if (!this.email || !this.password) {
      this.mensajeError = 'Por favor, completa ambos campos.';
      return;
    }

    this.cargando = true;

    const credenciales = {
      email: this.email,
      password: this.password
    };

    this.servicioAuth.login(credenciales).subscribe({
      next: (respuesta) => {
        this.cargando = false;
        
        const perfil = localStorage.getItem('perfil');
        
        if (perfil === 'admin') {
          this.router.navigate(['/admin']);
        } else if (perfil === 'profesor') {
          this.router.navigate(['/profesor']);
        } else {
          this.router.navigate(['/estudiante']);
        }
      },
      error: (err) => {
        this.cargando = false;
        this.mensajeError = 'Correo o contraseña incorrectos. Verifica tus credenciales.';
      }
    });
  }
}