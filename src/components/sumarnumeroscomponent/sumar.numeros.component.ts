import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: "app-sumar-numeros",
    standalone: false,
    templateUrl: "./sumar.numeros.component.html"
})

export class SumarNumerosComponent {
    public suma: number;
    @ViewChild("cajanumero1") cajaNumero1: ElementRef;
    @ViewChild("cajanumero2") cajaNumero2: ElementRef;

    constructor() {
        this.suma= 0;
        // Para inicializar los ElementRed, debemos indicar newElementRef(VALOR)
        this.cajaNumero1 = new ElementRef(0);
        this.cajaNumero2 = new ElementRef(0);
    }

    sumarNumeros(): void {
        let num1 = this.cajaNumero1.nativeElement.value;
        let num2 = this.cajaNumero2.nativeElement.value;
        this.suma = parseInt(num1) + parseInt(num2);
    }
}