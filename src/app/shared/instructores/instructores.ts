import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-instructores',
  imports: [CommonModule],
  templateUrl: './instructores.html',
  styleUrl: './instructores.css',
})
export class Instructores {
  instructores = [
    {
      id: 1,
      nombre: 'Ing. Kevin Pedrera',
      especialidad: 'Moodle & Idukay',
      experiencia: 8,
      lema: 'Optimizando la gestión del aula virtual paso a paso.',
      imagen: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      disponible: true,
    },
    {
      id: 2,
      nombre: 'Mgs. Carlos Ruiz',
      especialidad: 'Auditoría Educativa (MinEduc)',
      experiencia: 14,
      lema: 'Alineando la práctica docente con los estándares ministeriales.',
      imagen: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      disponible: true,
    },
    {
      id: 3,
      nombre: 'Dra. Elena Castro',
      especialidad: 'Asesora Curricular',
      experiencia: 20,
      lema: 'Garantizando la excelencia académica en el sector público y privado.',
      imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      disponible: false,
    },
    {
      id: 4,
      nombre: 'Lic. María Pérez',
      especialidad: 'Neuroeducación & TDAH',
      experiencia: 12,
      lema: 'Creando espacios de aprendizaje donde todos brillan.',
      imagen: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      disponible: true,
    },
    {
      id: 5,
      nombre: 'Dr. Roberto Gómez',
      especialidad: 'Diseño Curricular',
      experiencia: 15,
      lema: 'Llevando la teoría pedagógica a la realidad del aula.',
      imagen: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      disponible: false,
    },
    {
      id: 6,
      nombre: 'Psic. Ana Torres',
      especialidad: 'Inclusión & TEA',
      experiencia: 10,
      lema: 'Desarrollando la autonomía y empatía en entornos escolares.',
      imagen: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      disponible: true,
    },
    {
      id: 7,
      nombre: 'Lic. Andrés Medina',
      especialidad: 'Gamificación & TIC',
      experiencia: 6,
      lema: 'Transformando el aula tradicional en una experiencia interactiva.',
      imagen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      disponible: true,
    },
    {
      id: 8,
      nombre: 'Mgs. Laura Vera',
      especialidad: 'Evaluación Formativa (MinEduc)',
      experiencia: 18,
      lema: 'Criterios claros de evaluación para un aprendizaje significativo.',
      imagen: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      disponible: true,
    }
  ];
  instructoresFiltrados = this.instructores;
  buscar(event: Event) {
    const valor = (event.target as HTMLInputElement).value.toLowerCase();
    this.instructoresFiltrados = this.instructores.filter(profe => 
      profe.nombre.toLowerCase().includes(valor) || 
      profe.especialidad.toLowerCase().includes(valor)
    );
  }
  
  limpiarBusqueda() {
    this.instructoresFiltrados = this.instructores; // Restaura la lista completa
  }
}
