import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const adminGuard: CanActivateChildFn = (childRoute, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.perfilActual === 'admin') {
    return true;
  }
  
  alert('Acceso denegado. Área exclusiva para Administradores de DidactiPro.');
  router.navigate(['/']);
  return false;
};