import { Component, Input } from '@angular/core';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
@Input() titulo!: string;
  @Input() subtitulo!: string; 
  @Input() linkBoton1: string = '/'; 
  @Input() linkBoton2: string = '/';
  @Input() imagenUrl!: string; 
  @Input() videoUrl!: string;
  @Input() textoBoton1!: string; 
  @Input() textoBoton2!: string;
}
