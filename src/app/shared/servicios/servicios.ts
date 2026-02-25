import { Component } from '@angular/core';
import { Servicio } from '../../models/servicio';
import { CommonModule } from '@angular/common';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-servicios',
  imports: [CommonModule,Modal],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {

  cursoSeleccionado: Servicio | null = null;

  servicios: Servicio[] = [
    {
      titulo: "Dominio Total de Moodle 4.0",
      descripcion: "Transforma tu aula virtual en un entorno interactivo y altamente profesional.",
      detalle: "Programa integral para administrar Moodle desde cero. Aprenderás a configurar aulas, crear recursos interactivos, automatizar matriculaciones y diseñar sistemas de evaluación avanzados.",
      tipo: "tech",
      imagen: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop"
    },
    {
      titulo: "Intervención en TDAH",
      descripcion: "Metodologías neuroeducativas para potenciar el aprendizaje y la atención.",
      detalle: "Domina el diseño de ambientes de aprendizaje estructurados para estudiantes con TDAH. Descubre técnicas de manejo conductual y adaptación de materiales.",
      tipo: "inclusion",
      imagen: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
    },
    {
      titulo: "Arquitectura Curricular",
      descripcion: "Planifica de forma ágil, precisa y alineada a los estándares actuales.",
      detalle: "Optimiza tu tiempo con este taller práctico. Te entregamos plantillas editables y te enseñamos a redactar destrezas y construir planificaciones microcurriculares.",
      tipo: "admin",
      imagen: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
    },
    {
      titulo: "TEA y Espectro Autista",
      descripcion: "Estrategias sensoriales y comunicación aumentativa para inclusión efectiva.",
      detalle: "Comprende a profundidad el perfil del estudiante con TEA. Aprenderás a crear agendas visuales, anticipadores y zonas de regulación emocional.",
      tipo: "inclusion",
      imagen: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop"
    },
    {
      titulo: "Gamificación Didáctica",
      descripcion: "Aumenta la motivación y el compromiso mediante dinámicas de juego.",
      detalle: "Ve más allá de una simple trivia. Aprende a crear narrativas educativas, sistemas de recompensas y escape rooms utilizando herramientas de vanguardia.",
      tipo: "tech",
      imagen: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=800&auto=format&fit=crop"
    },
    {
      titulo: "Evaluación por Rúbricas",
      descripcion: "Crea instrumentos de evaluación objetivos, justos y medibles.",
      detalle: "Domina la evaluación formativa. Te enseñamos a diseñar rúbricas analíticas y holísticas que eliminan la subjetividad y mejoran la retroalimentación.",
      tipo: "admin",
      imagen: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
    }
  ];

  abrirModal(curso: Servicio) {
    this.cursoSeleccionado = curso;
  }

  cerrarModal() {
    this.cursoSeleccionado = null;
  }

}