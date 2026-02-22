import { CanActivateFn } from '@angular/router';

export const estudianteGuard: CanActivateFn = (route, state) => {
  return true;
};
