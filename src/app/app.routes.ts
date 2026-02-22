import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { Page404 } from './shared/page-404/page-404';
import { Cursos } from './shared/cursos/cursos';
import { Contacto } from './shared/contacto/contacto';
import { Comunidad } from './shared/comunidad/comunidad';
import { Login } from './features/auth/login/login';
import { Registro } from './features/auth/registro/registro';

import { adminGuard } from './guards/admin-guard';
import { profesorGuard } from './guards/profesor-guard';
import { authMatchGuard } from './guards/auth-match-guard';
import { estudianteGuard } from './guards/estudiante-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'cursos', component: Cursos },
  { path: 'contacto', component: Contacto },
  { path: 'comunidad', component: Comunidad },

  {
    path: 'admin',
    canActivate: [adminGuard],
    canMatch: [authMatchGuard],
    loadComponent: () =>
      import('./features/administrador/administrador').then(m => m.Administrador)
  },

  {
    path: 'profesor',
    canActivate: [profesorGuard],
    canMatch: [authMatchGuard],
    loadComponent: () =>
      import('./features/profesores/profesores').then(m => m.Profesores)
  },

  {
    path: 'estudiante',
    canActivate: [estudianteGuard],
    canMatch: [authMatchGuard],
    loadComponent: () =>
      import('./features/estudiantes/estudiantes').then(m => m.Estudiantes)
  },

  { path: '**', component: Page404 }
];