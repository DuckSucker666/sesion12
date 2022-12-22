import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  cantidadone = 0;
  cantidadtwo = 0;
  resultado = 0;

  multiplication(){
  let res =  this.resultado = (this.cantidadone * this.cantidadtwo);
    console.log(res);
  }
}
