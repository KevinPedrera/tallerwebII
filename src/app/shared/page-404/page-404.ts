import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-404',
  imports: [RouterLink],
  templateUrl: './page-404.html',
  styleUrl: './page-404.css',
})
export class Page404 {
  private location = inject(Location);

  regresar() {
    this.location.back();
  }
}
