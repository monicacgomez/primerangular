import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-component',
  standalone: false,
  styleUrl: './tabla.multiplicar.component.css',
  templateUrl: './tabla.multiplicar.component.html',
})

export class TablaMultiplicarComponent {
  @ViewChild("cajanumero") cajaNumero!: ElementRef;
  public elementos!: Array<any>;
  public numeros!: Array<number>;
  public numero!: number;

  generarElementos(): void {
    this.numero = parseInt(this.cajaNumero.nativeElement.value);
    
    let aux = [];
    for (let i = 1; i <= 10; i++) {
        let resultado = this.numero * i;
        let operacion = this.numero + " * " + i;
        
        aux.push({
            operacion: operacion,
            resultado: resultado
        });
    }
    
    this.elementos = aux;
}

mostrarTabla():void {
    this.numero = parseInt(this.cajaNumero.nativeElement.value);
    let aux = [];
    
    for (let i = 1; i <= 10; i++){
        let resultado = this.numero * i;
        aux.push(resultado);
    }
    this.numeros = aux;
}
}