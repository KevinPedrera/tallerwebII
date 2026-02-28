import { inject } from '@angular/core';
import { CanMatchFn, Route, UrlSegment, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const authMatchGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  if (authService.estaAutenticado) {
    return true;
  } 
  
  router.navigate(['/login']);
  return false;
};