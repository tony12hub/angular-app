import { Component } from '@angular/core';
import { Tarea } from '../../models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  listaTareas:Tarea[] = [];
  nombre = ''; 
}
