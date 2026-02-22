import { CanMatchFn, Route, UrlSegment } from '@angular/router';

export const authMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  const token = localStorage.getItem('token');
  const perfil = localStorage.getItem('perfil');

  if (!token) return false;

  if (perfil === 'estudiante' && segments[0]?.path === 'estudiante') {
    return true;
  }

  return false;
};