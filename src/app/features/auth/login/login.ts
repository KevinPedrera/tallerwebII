import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';
import { UsuarioService } from '../../../services/usuario-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule,RouterLink],
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
  private usuarioService = inject(UsuarioService); // <-- Inyectamos BD
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

    this.servicioAuth.login(this.email, this.password)
      .then((credenciales) => {
        
        const correoLogueado = credenciales.user?.email;

        this.usuarioService.getUsuarios().subscribe({
          next: (usuariosDB) => {
            this.cargando = false;
            
            const miUsuario = usuariosDB.find(u => u.email === correoLogueado);

            if (miUsuario) {
              if (miUsuario.perfil === 'admin') {
                this.router.navigate(['/admin']);
              } else if (miUsuario.perfil === 'profesor') {
                this.router.navigate(['/profesor']);
              } else {
                this.router.navigate(['/estudiante']);
              }
            } else {
              this.router.navigate(['/']); 
            }
          },
          error: () => {
            this.cargando = false;
            this.router.navigate(['/']);
          }
        });

      })
      .catch((err) => {
        this.cargando = false;
        if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
          this.mensajeError = 'Correo o contraseña incorrectos.';
        } else {
          this.mensajeError = 'Ocurrió un error al intentar acceder.';
        }
      });
  }

  cerrarSesion() {
    this.servicioAuth.logout();
  }
}
