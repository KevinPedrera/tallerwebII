import { Component, Input } from '@angular/core';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  //La informacion que recibe el componente padre
  @Input() titulo!: string;
  @Input() subtitulo!: string; 
  @Input() linkBoton: string = '/';
  @Input() imagenUrl!: string; 
  @Input() videoUrl!: string;
  @Input() txtBotton1!: String;
  @Input() txtBotton2!: String;

}
