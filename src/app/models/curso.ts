export interface Curso {
  id: number;
  titulo: string;
  descripcion: string;
  detalle: string;
  instructor: string;
  imagen: string;
  precio: number;
  calificacion: number;
  duracion: string;
  nivel: 'Principiante' | 'Intermedio' | 'Avanzado';
  categoria: 'Tecnología' | 'Inclusión' | 'Gestión';
}