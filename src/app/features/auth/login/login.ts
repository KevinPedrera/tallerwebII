import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';
import { UsuarioService } from '../../../services/usuario-service';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = '';
  password = '';

  private auth = inject(AuthService);
  private usuarioService = inject(UsuarioService);
  private router = inject(Router);

  iniciarSesion(): void {
    this.auth.login(this.email, this.password)
      .then((cred) => {
        const uid = cred.uid;

        this.usuarioService.getUsuarioPorUid(uid).subscribe((usuario: Usuario | null) => {

          if (!usuario) {
            alert("No se encontraron datos adicionales del usuario.");
            return;
          }

          if (usuario.perfil === 'administrador') {
            this.router.navigate(['/administrador']);
          } else if (usuario.perfil === 'profesor') {
            this.router.navigate(['/profesores']);
          } else if (usuario.perfil === 'estudiante') {
            this.router.navigate(['/estudiantes']);
          } else {
            alert("Perfil no reconocido.");
          }

        });
      })
      .catch(err => alert("Credenciales incorrectas"));
  }
}