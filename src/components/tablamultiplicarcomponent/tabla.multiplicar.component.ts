import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: "app-multiplicar-numeros",
    standalone: false,
    templateUrl: "./tabla.multiplicar.component.html"
})
export class TablaMultiplicarComponent {

    public numero: number = 0;

    public tabla: {
        multiplicador: number;
        producto: number;
    }[] = [];

    @ViewChild("cajanumero") cajaNumero!: ElementRef;

    multiplicarNumeros(): void {
        this.numero = parseInt(this.cajaNumero.nativeElement.value);

        this.tabla = [];

        for (let i = 1; i <= 10; i++) {
            this.tabla.push({
                multiplicador: i,
                producto: this.numero * i
            });
        }
    }
}