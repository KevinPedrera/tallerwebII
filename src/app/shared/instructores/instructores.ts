import { Component } from '@angular/core';

@Component({
  selector: 'app-instructores',
  imports: [],
  templateUrl: './instructores.html',
  styleUrl: './instructores.css',
})
export class Instructores {
  instructores = [
    {
      id: 1,
      nombre: 'Ing. Kevin Pedrera',
      especialidad: 'Moodle & AWS',
      experiencia: 5,
      imagen: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      disponible: true,
    },
    {
      id: 2,
      nombre: 'Lic. María Pérez',
      especialidad: 'Inclusión (TDAH)',
      experiencia: 8,
      imagen: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      disponible: true,
    },
    {
      id: 3,
      nombre: 'Dr. Roberto Gómez',
      especialidad: 'Gestión Curricular',
      experiencia: 15,
      imagen: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      disponible: false,
    },
    {
      id: 4,
      nombre: 'Psic. Ana Torres',
      especialidad: 'Autismo & TEA',
      experiencia: 6,
      imagen: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      disponible: true,
    }
  ];

  // 2. LISTA FILTRADA (Esta es la que usa el @for del HTML)
  // Al principio es igual a la lista completa
  instructoresFiltrados = this.instructores;


  // 3. FUNCIÓN PARA BUSCAR (Opcional, si tienes buscador)
  buscar(event: Event) {
    const valor = (event.target as HTMLInputElement).value.toLowerCase();
    
    // Aquí actualizamos 'instructoresFiltrados'
    this.instructoresFiltrados = this.instructores.filter(profe => 
      profe.nombre.toLowerCase().includes(valor) || 
      profe.especialidad.toLowerCase().includes(valor)
    );
  }
}
