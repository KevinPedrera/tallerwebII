import { Component } from '@angular/core';
import { Curso } from '../../models/curso';

@Component({
  selector: 'app-cursos',
  imports: [],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css',
})
export class Cursos {

  cursos: Curso[] = [
    {
      id: 1,
      titulo: "Máster en Moodle 4.0",
      descripcion: "Configura, administra y personaliza tu aula virtual desde cero.",
      detalle: "Aprende a instalar plugins, gestionar matriculaciones masivas y crear cuestionarios seguros.",
      instructor: "Ing. Kevin Pedrera",
      imagen: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
      imagen: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
      detalle: "Taller práctico para diseñar rúbricas analíticas en Excel y Moodle.",
      instructor: "Dr. Roberto Gómez",
      imagen: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      precio: 29.99,
      calificacion: 4.5,
      duracion: "5 horas",
      nivel: 'Avanzado',
      categoria: 'Gestión'
    }
  ];

  getEstrellas(calificacion: number) {
    return Array(Math.round(calificacion)).fill(0);
  }
}