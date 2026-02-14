import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Page404 } from './shared/page-404/page-404';
import { Cursos } from './shared/cursos/cursos';
import { Contacto } from './shared/contacto/contacto';
import { Comunidad } from './shared/comunidad/comunidad';
import { Login } from './features/auth/login/login';
import { Registro } from './features/auth/registro/registro';

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
    //Ruta por encaso de que no exita algo
    {path:'**',component:Page404}
];