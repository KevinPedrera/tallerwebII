export interface Recurso {
    id?: string;
    titulo: string;
    tipo: 'Plantilla' | 'Guía' | 'Herramienta' | '';
    enlace: string;
}