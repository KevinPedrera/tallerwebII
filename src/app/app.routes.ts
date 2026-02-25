import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Page404 } from './shared/page-404/page-404';
import { Cursos } from './shared/cursos/cursos';
import { Contacto } from './shared/contacto/contacto';
import { Comunidad } from './shared/comunidad/comunidad';
import { Login } from './features/auth/login/login';
import { Registro } from './features/auth/registro/registro';
import { GestorRecursos } from './shared/gestor-recursos/gestor-recursos';
import { Instructores } from './shared/instructores/instructores';
import { Profesor } from './features/profesor/profesor';
import { Admin } from './features/admin/admin';
import { Estudiante } from './features/estudiante/estudiante';
import { authGuard } from './guards/auth-guard';
import { authMatchGuard } from './guards/match-guard';
import { adminGuard } from './guards/admin-guard';
import { profesorGuard } from './guards/profesor-guard';
import { Legal } from './shared/legal/legal';

export const routes: Routes = [
    //Ruta inical
    {path:'',component:Home},
    //Ruta de navegacion
    {path:'login',component:Login},
    {path:'cursos',component:Cursos},
    {path: 'contacto',component:Contacto},
    {path: 'comunidad',component:Comunidad},
    {path: 'login', component:Login},
    {path: 'registro',component:Registro},
    {path: 'recursos',component:GestorRecursos},
    {path: 'expertos',component:Instructores},
    {path: 'legal',component:Legal},
    
    //Ruta con guardianes
    {path: 'estudiante',component: Estudiante, canActivate: [authGuard]},
    {path: 'admin',component: Admin,canMatch: [authMatchGuard],canActivateChild: [adminGuard],children: [{path: 'recursos', component: GestorRecursos}]},
    {path: 'profesor', component: Profesor, canMatch: [authMatchGuard], canActivateChild: [profesorGuard], children: []},
    
    //Ruta por encaso de que no exita algo
    {path:'**',component:Page404}
];