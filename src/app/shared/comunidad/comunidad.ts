import { Component, inject, signal } from '@angular/core';
import { Instructores } from '../instructores/instructores';
import { RecursoService } from '../../services/recurso-service';
import { Recurso } from '../../models/recurso';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comunidad',
  imports: [Instructores, CommonModule],
  templateUrl: './comunidad.html',
  styleUrl: './comunidad.css',
})
export class Comunidad {
  seccionActiva: 'foro' | 'instructores' | 'recursos' = 'foro';
  
  private servicioRecurso = inject(RecursoService);
  
  recursosPublicos = signal<Recurso[]>([]);

  ngOnInit() {
    this.servicioRecurso.getRecursos().subscribe(datos => {
      this.recursosPublicos.set(datos);
    });
  }
  cambiarPestana(tab: 'foro' | 'instructores' | 'recursos') {
    this.seccionActiva = tab;
  }
  discusiones = [
    {
      titulo: "¿Cómo automatizar la evaluación por rúbricas en Moodle 4.0?",
      autor: "Ing. Kevin Pedrera",
      rol: "Instructor",
      avatar: "K",
      categoria: "Tecnología",
      respuestas: 14,
      tiempo: "hace 2 horas",
      colorTag: "bg-blue-100 text-blue-700"
    },
    {
      titulo: "Estrategias de contención emocional en el aula para estudiantes con TDAH",
      autor: "Lic. María Pérez",
      rol: "Especialista",
      avatar: "M",
      categoria: "Inclusión",
      respuestas: 32,
      tiempo: "hace 5 horas",
      colorTag: "bg-emerald-100 text-emerald-700"
    },
    {
      titulo: "Problemas sincronizando calificaciones con Idukay",
      autor: "Carlos Ruiz",
      rol: "Docente",
      avatar: "C",
      categoria: "Gestión Curricular",
      respuestas: 8,
      tiempo: "hace 1 día",
      colorTag: "bg-amber-100 text-amber-700"
    },
    {
      titulo: "Plantillas gratuitas para planificaciones microcurriculares 2026",
      autor: "Dr. Roberto Gómez",
      rol: "Instructor",
      avatar: "R",
      categoria: "Recursos",
      respuestas: 56,
      tiempo: "hace 2 días",
      colorTag: "bg-indigo-100 text-indigo-700"
    }
  ];

  categoriasForo = [
    { nombre: "Tecnología Educativa", temas: 142, icono: "💻" },
    { nombre: "Inclusión y Diversidad", temas: 98, icono: "🧠" },
    { nombre: "Gestión Curricular", temas: 215, icono: "📊" },
    { nombre: "Recursos Compartidos", temas: 340, icono: "📚" },
    { nombre: "Café de Profesores", temas: 512, icono: "☕" },
  ];
}
