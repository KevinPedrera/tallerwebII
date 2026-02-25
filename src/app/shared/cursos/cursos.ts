import { Component } from '@angular/core';
import { Curso } from '../../models/curso';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  imports: [CommonModule],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css',
})
export class Cursos {
  mostrarTodos: boolean = false;

  cursos: Curso[] = [
    {
      id: 1,
      titulo: "Máster en Moodle 4.0",
      descripcion: "Configura, administra y personaliza tu aula virtual desde cero.",
      detalle: "Aprende a instalar plugins, gestionar matriculaciones masivas y crear cuestionarios seguros.",
      instructor: "Ing. Kevin Pedrera",
      imagen: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
      precio: 49.99,
      calificacion: 4.8,
      duracion: "15 horas",
      nivel: 'Intermedio',
      categoria: 'Tecnología'
    },
    {
      id: 2,
      titulo: "Estrategias para TDAH",
      descripcion: "Adaptaciones curriculares para mantener la atención en clase.",
      detalle: "Metodologías activas y diseño universal de aprendizaje (DUA) aplicado a casos reales.",
      instructor: "Lic. María Pérez",
      imagen: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      precio: 35.00,
      calificacion: 4.9,
      duracion: "8 horas",
      nivel: 'Principiante',
      categoria: 'Inclusión'
    },
    {
      id: 3,
      titulo: "Evaluación por Rúbricas",
      descripcion: "Deja de calificar subjetivamente y crea criterios claros.",
      detalle: "Taller práctico para diseñar rúbricas analíticas en Excel y plataformas virtuales.",
      instructor: "Dr. Roberto Gómez",
      imagen: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
      precio: 29.99,
      calificacion: 4.5,
      duracion: "5 horas",
      nivel: 'Avanzado',
      categoria: 'Gestión'
    },
    {
      id: 4,
      titulo: "Dominando Idukay",
      descripcion: "Optimiza tu tiempo gestionando calificaciones y asistencia.",
      detalle: "Aprende los atajos y configuraciones avanzadas para comunicarte efectivamente con padres de familia.",
      instructor: "Ing. Kevin Pedrera",
      imagen: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
      precio: 24.99,
      calificacion: 4.7,
      duracion: "6 horas",
      nivel: 'Intermedio',
      categoria: 'Gestión'
    },
    {
      id: 5,
      titulo: "IA para Docentes",
      descripcion: "Automatiza la creación de material didáctico con Inteligencia Artificial.",
      detalle: "Usa ChatGPT y herramientas visuales para generar planificaciones y evaluaciones en minutos.",
      instructor: "Ing. Kevin Pedrera",
      imagen: "https://images.unsplash.com/photo-1677442136019-2180572e09ff?q=80&w=800&auto=format&fit=crop",
      precio: 39.99,
      calificacion: 4.9,
      duracion: "10 horas",
      nivel: 'Principiante',
      categoria: 'Tecnología'
    },
    {
      id: 6,
      titulo: "Gamificación en el Aula",
      descripcion: "Aumenta la motivación mediante dinámicas de juego interactivo.",
      detalle: "Crea escape rooms educativos, misiones y recompensas utilizando Genially y Kahoot.",
      instructor: "Lic. María Pérez",
      imagen: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=800&auto=format&fit=crop",
      precio: 34.99,
      calificacion: 4.8,
      duracion: "12 horas",
      nivel: 'Intermedio',
      categoria: 'Tecnología'
    },
    {
      id: 7,
      titulo: "Planificación Microcurricular",
      descripcion: "Diseña planificaciones ágiles y alineadas a los estándares.",
      detalle: "Paso a paso para redactar destrezas, indicadores de evaluación y estrategias metodológicas.",
      instructor: "Dr. Roberto Gómez",
      imagen: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
      precio: 45.00,
      calificacion: 4.6,
      duracion: "18 horas",
      nivel: 'Avanzado',
      categoria: 'Gestión'
    },
    {
      id: 8,
      titulo: "Diseño Universal (DUA)",
      descripcion: "Estrategias para aulas diversas e inclusivas.",
      detalle: "Aprende a proporcionar múltiples formas de representación, acción y expresión en tus clases.",
      instructor: "Psic. Ana Torres",
      imagen: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop",
      precio: 39.99,
      calificacion: 4.9,
      duracion: "14 horas",
      nivel: 'Principiante',
      categoria: 'Inclusión'
    }
  ];

  get cursosVisibles() {
    return this.mostrarTodos ? this.cursos : this.cursos.slice(0, 4);
  }

  toggleMostrarCursos() {
    this.mostrarTodos = !this.mostrarTodos;
  }

  getEstrellas(calificacion: number) {
    return Array(Math.round(calificacion)).fill(0);
  }
}