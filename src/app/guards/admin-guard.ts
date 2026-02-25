import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { UsuarioService } from '../services/usuario-service';
import { map } from 'rxjs';

export const adminGuard: CanActivateChildFn = (childRoute, state) => {
  // Inyectamos los servicios necesarios
  const authService = inject(AuthService);
  const usuarioService = inject(UsuarioService);
  const router = inject(Router);

  // Obtenemos el correo del usuario que está logueado en este momento
  const correoActual = authService.usuario?.email;

  // Buscamos en Firebase el perfil de este correo
  return usuarioService.getUsuarios().pipe(
    map(usuarios => {
      const miUsuario = usuarios.find(u => u.email === correoActual);
      
      // La regla de oro: ¿Existe y es admin?
      if (miUsuario && miUsuario.perfil === 'admin') {
        return true; // ¡Puerta abierta!
      }
      
      // Si llega aquí, es porque NO es admin
      alert('Acceso denegado. Área exclusiva para Administradores de DidactiPro.');
      router.navigate(['/']);
      return false; // ¡Puerta cerrada!
    })
  );
};