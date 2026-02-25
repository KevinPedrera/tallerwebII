import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { UsuarioService } from '../services/usuario-service';
import { map } from 'rxjs';

export const profesorGuard: CanActivateChildFn = (childRoute, state) => {
  // Inyectamos los servicios
  const authService = inject(AuthService);
  const usuarioService = inject(UsuarioService);
  const router = inject(Router);

  // Identificamos quién quiere entrar
  const correoActual = authService.usuario?.email;

  // Consultamos su perfil en la base de datos
  return usuarioService.getUsuarios().pipe(
    map(usuarios => {
      const miUsuario = usuarios.find(u => u.email === correoActual);
      
      // Verificamos el rol
      if (miUsuario && miUsuario.perfil === 'profesor') {
        return true; // ¡Adelante, colega!
      }
      
      // Si es estudiante o admin, no lo dejamos ver el panel del profesor
      alert('Acceso denegado. Esta sección es exclusiva para Profesores e Instructores.');
      router.navigate(['/']);
      return false;
    })
  );
};