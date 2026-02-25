import { inject } from '@angular/core';
import { CanMatchFn, Route, UrlSegment, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const authMatchGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Si el usuario está autenticado en Firebase, la ruta "existe" para él
  if (authService.usuario) {
    return true;
  } 
  
  // Si no está logueado, la ruta es "invisible" y lo mandamos al login
  router.navigate(['/login']);
  return false;
};