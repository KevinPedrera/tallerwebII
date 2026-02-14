import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario-service';

@Component({
  selector: 'app-registro',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

    // Estado del formulario
  cargando: boolean = false;
  mensajeError: string = '';
  mostrarPassword: boolean = false;

  // Modelo del formulario
  usuario = {
    nombre: '',
    apellido: '',
    cedula: '',
    telefono: '',
    direccion: '',
    perfil: '',
    email: '',
    password: ''
  };

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

   togglePassword() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  soloNumeros(event: any) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  }

  validarFormulario(): boolean {
    if (!this.usuario.nombre.trim() ||
        !this.usuario.apellido.trim() ||
        !this.usuario.cedula.trim() ||
        !this.usuario.telefono.trim() ||
        !this.usuario.direccion.trim() ||
        !this.usuario.perfil.trim() ||
        !this.usuario.email.trim() ||
        !this.usuario.password.trim()) {

      this.mensajeError = 'Todos los campos son obligatorios.';
      return false;
    }

    if (this.usuario.cedula.length !== 10) {
      this.mensajeError = 'La cédula debe tener 10 dígitos.';
      return false;
    }

    if (this.usuario.password.length < 6) {
      this.mensajeError = 'La contraseña debe tener al menos 6 caracteres.';
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

    this.usuarioService.postUsuario(this.usuario).subscribe({
      next: () => {
        this.cargando = false;

        this.usuario = {
          nombre: '',
          apellido: '',
          cedula: '',
          telefono: '',
          direccion: '',
          perfil: '',
          email: '',
          password: ''
        };

        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.cargando = false;
        console.error(err);
        this.mensajeError = 'Ocurrió un error al registrar. Inténtalo nuevamente.';
      }
    });
  }
}
