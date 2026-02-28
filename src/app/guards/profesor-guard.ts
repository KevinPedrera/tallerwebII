import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { UsuarioService } from '../services/usuario-service';

export const profesorGuard: CanActivateChildFn = (childRoute, state) => {
  
  const authService = inject(AuthService);
  const usuarioService = inject(UsuarioService);
  const router = inject(Router);

  if (authService.perfilActual === 'profesor') {
    return true; 
  }
  
  alert('Acceso denegado. Esta sección es exclusiva para Profesores e Instructores.');
  router.navigate(['/']);
  return false;
};