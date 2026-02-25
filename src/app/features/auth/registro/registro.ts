import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario-service';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-registro',
  imports: [CommonModule,FormsModule,RouterLink],
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

  private usuarioService = inject(UsuarioService);
  private authService = inject(AuthService); // <-- Inyectar el servicio de Auth
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

    this.authService.registroAuth(this.usuario.email, this.usuario.password)
      .then((credenciales) => {
        
        const datosPerfil = { ...this.usuario };
        delete (datosPerfil as any).password; 

        this.usuarioService.postUsuario(datosPerfil).subscribe({
          next: () => {
            this.cargando = false;
            this.usuario = { nombre: '', apellido: '', cedula: '', telefono: '', direccion: '', perfil: '', email: '', password: '' };
            this.router.navigate(['/login']);
          },
          error: (err) => {
            this.cargando = false;
            this.mensajeError = 'Cuenta creada, pero hubo un error al guardar el perfil.';
          }
        });

      })
      .catch((err) => {
        this.cargando = false;
        if (err.code === 'auth/email-already-in-use') {
          this.mensajeError = 'Este correo ya está registrado en la plataforma.';
        } else if (err.code === 'auth/invalid-email') {
          this.mensajeError = 'El formato del correo es inválido.';
        } else {
          this.mensajeError = 'Ocurrió un error al crear la cuenta. Intenta de nuevo.';
        }
      });
  }
}
