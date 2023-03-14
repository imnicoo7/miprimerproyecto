import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent {

  nombre = 'Nicolas';
  apellido = 'Gutierrez';
  empresa = 'Google';
  edad= 22;

  habilitacionCuadro = false;
  usuRegistrado = false;

  textoDeRegistro = 'No hay nadie registrado'

  getRegistroUsuario() {
    this.usuRegistrado=false;
  }

  setUsuarioRegistrado(event: Event){
    if ((<HTMLInputElement>event.target).value === 'si'){
      this.textoDeRegistro = 'Usuario se acaba de registrar'
    }else{
      this.textoDeRegistro = 'Usuario no se encuentra registrado'
    }
  }


}
