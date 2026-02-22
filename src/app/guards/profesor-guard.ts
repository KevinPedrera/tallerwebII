import { CanActivateFn } from '@angular/router';

export const profesorGuard: CanActivateFn = (route, state) => {
  return localStorage.getItem('perfil') === 'profesor';
};
