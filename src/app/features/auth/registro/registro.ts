import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-registro',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  cargando: boolean = false;
  mensajeError: string = '';
  mostrarPassword: boolean = false;

  usuario = {
    nombre: '', apellido: '', cedula: '', telefono: '',
    direccion: '', perfil: '', email: '', password: ''
  };

  private authService = inject(AuthService);
  private router = inject(Router);

  togglePassword() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  soloNumeros(event: any) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  }

  validarFormulario(): boolean {
    if (!this.usuario.nombre.trim() || !this.usuario.apellido.trim() || !this.usuario.cedula.trim() ||
        !this.usuario.telefono.trim() || !this.usuario.direccion.trim() || !this.usuario.perfil.trim() ||
        !this.usuario.email.trim() || !this.usuario.password.trim()) {
      this.mensajeError = 'Todos los campos son obligatorios.';
      return false;
    }
    if (this.usuario.cedula.length !== 10) {
      this.mensajeError = 'La cédula debe tener exactamente 10 dígitos.';
      return false;
    }
    if (this.usuario.password.length < 5) {
      this.mensajeError = 'La contraseña debe tener al menos 5 caracteres.';
      return false;
    }
    return true;
  }

  registrarse() {
    this.mensajeError = '';

    if (!this.validarFormulario()) {
      return;
    }

    this.cargando = true;

    this.authService.registroAuth(this.usuario).subscribe({
      next: () => {
        this.cargando = false;
        this.usuario = { nombre: '', apellido: '', cedula: '', telefono: '', direccion: '', perfil: '', email: '', password: '' };
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.cargando = false;
        if (err.status === 500) {
            this.mensajeError = 'Error: Es posible que este correo o cédula ya estén registrados.';
        } else {
            this.mensajeError = 'Ocurrió un error al conectar con el servidor. Intenta de nuevo.';
        }
      }
    });
  }
}