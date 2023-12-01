import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: String = 'Angular CRUD';
  msg: string = '';

  empleados = [
    { 'nombre': 'Soria', ocupacion: 'Robar kills', email: 'elsuciodan@gmail.com' },
    { 'nombre': 'Col', ocupacion: 'Hacker', email: 'elbarto@gmail.com' },
    { 'nombre': 'Alvarez', ocupacion: 'Ver furros', email: 'elfurros@gmail.com' }
  ];

  model: any = {};
  model2: any = {};
  ocultarUpdate:boolean=true;

  /*  agregar */
  addEmpleado(): void {
    /*   inserta datos en el arreglo */
    this.empleados.push(this.model);
    this.msg='campo agregado';
  }
  /*   borrar */
  deleteEmpleado(i: number): void {
    var answer = confirm('Seguro de eliminar?');
    if (answer) {
      this.empleados.splice(i, 1);
      this.msg='campo eliminado';
    }
  }
  /*   editar */
  myValue: any;
  editEmpleado(i: number): void {
    this.ocultarUpdate = false;
    this.model2.nombre = this.empleados[i].nombre;
    this.model2.ocupacion = this.empleados[i].ocupacion;
    this.model2.email = this.empleados[i].email;
    this.myValue = i;
  }
  /*   actualizar */
  updateEmpleado(): void {
    let i = this.myValue;
    for (let j = 0; j < this.empleados.length; j++) {
      if (i == j) {
        this.empleados[i] = this.model2;
        this.msg ='campo actualizado';
        this.model2 = {};
      }
    }
  }
  closeAlert(){
    this.msg ='';
  }
}