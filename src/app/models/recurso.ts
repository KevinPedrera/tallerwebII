export interface Recurso {
    id?: number;
    titulo: string;
    tipo: 'Plantilla' | 'Guía' | 'Herramienta' | '';
    enlace: string;
    autor?: string;
}