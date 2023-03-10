import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent {

  nombre = 'Nicolas';
  apellido = 'Gutierrez';
  empresa = 'Píldoras Informáticas';
  //edad= 22;

 evaluaEdad(edad:number) { edad <18 ? 'Menor de edad':'Mayor de edad'}
}
