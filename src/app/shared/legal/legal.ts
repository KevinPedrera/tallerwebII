import { Component } from '@angular/core';

@Component({
  selector: 'app-legal',
  imports: [],
  templateUrl: './legal.html',
  styleUrl: './legal.css',
})
export class Legal {
  anioActual = new Date().getFullYear();
}
