import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Servicio } from '../../models/servicio';
import { FormsModule } from '@angular/forms';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-modal',
  imports: [FormsModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
@Input() curso!: Servicio; 
  @Output() cerrar = new EventEmitter<void>(); 

  close() {
    this.cerrar.emit();
  }
}
