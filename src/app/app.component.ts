import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: String = 'Angular Crud';

  empleados = [
    { 'nombre': 'Soria', ocupacion: 'Robar kills' },
    { 'nombre': 'Colazo', ocupacion: 'Hacker' },
    { 'nombre': 'Alvarez', ocupacion: 'Ver furros' }
  ];

  model: any = {};

  /*  agregar */
  addEmpleado(): void {


  }
  /*   borrar */
  deleteEmpleado(): void {

  }
  /*   editar */
  editEmpleado(): void {

  }
  /*   actualizar */
  updateEmpleado(): void {

  }


}
