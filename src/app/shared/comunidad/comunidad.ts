import { Component } from '@angular/core';
import { Instructores } from '../instructores/instructores';

@Component({
  selector: 'app-comunidad',
  imports: [Instructores],
  templateUrl: './comunidad.html',
  styleUrl: './comunidad.css',
})
export class Comunidad {

  seccionActiva: 'foro' | 'instructores' = 'foro';

  cambiarPestana(tab: 'foro' | 'instructores') {
    this.seccionActiva = tab;
  }

  // --- DATOS DEL FORO (Solo el foro, los instructores ya están en su propio archivo) ---
  discusiones = [
    {
      titulo: "¿Cómo configurar cuestionarios seguros en Moodle?",
      autor: "Profe. Carlos",
      avatar: "C",
      categoria: "Moodle",
      respuestas: 12,
      tiempo: "hace 2 horas",
      color: "bg-orange-100 text-orange-600"
    },
    // ... tus otros datos del foro
  ];

  categoriasForo = [
    { nombre: "Soporte Técnico", temas: 120, icono: "💻" },
    { nombre: "Recursos Didácticos", temas: 340, icono: "📚" },
    { nombre: "Experiencias de Aula", temas: 85, icono: "💡" },
  ];
}
