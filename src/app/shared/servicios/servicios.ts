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
      titulo: "Dominio Total de Moodle",
      descripcion: "Aprende a gestionar plataformas educativas como un profesional.",
      detalle: "Formación completa para administrar Moodle desde cero: instalación en servidor, creación de cursos optimizados, configuración avanzada de actividades, automatización de matrículas y gestión del desempeño estudiantil mediante calificaciones y reportes. Ideal para instituciones educativas y profesionales e-learning.",
      tipo: "tech",
      
    },
    {
      titulo: "Estrategias Educativas para TDAH",
      descripcion: "Implementa metodologías efectivas basadas en neuroeducación.",
      detalle: "Aprende a diseñar ambientes de aprendizaje adaptados para estudiantes con TDAH. Incluye herramientas para manejo conductual positivo, material visual optimizado, técnicas de enfoque sostenido, organización de tareas y evaluación diferenciada con instrumentos flexibles.",
      tipo: "inclusion",
      
    },
    {
      titulo: "Planificación Curricular Profesional",
      descripcion: "Desarrolla planificaciones claras, rápidas y totalmente adaptadas.",
      detalle: "Te guiamos paso a paso para construir planificaciones microcurriculares eficientes y listas para entregar. Incluye plantillas editables, ejemplos por áreas, redacción de destrezas, evaluación formativa y estructura aprobada por entornos educativos oficiales.",
      tipo: "admin",
      
    },
    {
      titulo: "Autismo en el Aula",
      descripcion: "Aplica recursos visuales y estructuración efectiva.",
      detalle: "Comprende las características del espectro autista y aprende a implementar pictogramas, agendas visuales, anticipadores, zonas de regulación emocional y estrategias sensoriales. Diseñado para docentes que buscan inclusión real en el aula.",
      tipo: "inclusion",
      
    },
    {
      titulo: "Gamificación Digital para Docentes",
      descripcion: "Transforma tus clases con herramientas interactivas modernas.",
      detalle: "Domina plataformas como Kahoot, Genially, Wordwall y crea actividades gamificadas de alto impacto. Aprende a diseñar misiones, sistemas de recompensas, rankings, escape rooms educativos y dinámicas que incrementan la motivación de tus estudiantes.",
      tipo: "tech",
      
    },
    {
      titulo: "Evaluación por Rúbricas",
      descripcion: "Crea instrumentos justos, claros y alineados a competencias.",
      detalle: "Aprende a diseñar rúbricas analíticas, holísticas y por niveles de desempeño para evaluar competencias y procesos. Incluye criterios profesionales, ejemplos por asignaturas y modelado práctico desde cero.",
      tipo: "admin",
      
    }
  ];

  abrirModal(curso: Servicio) {
    this.cursoSeleccionado = curso;
  }

  cerrarModal() {
    this.cursoSeleccionado = null;
  }
}