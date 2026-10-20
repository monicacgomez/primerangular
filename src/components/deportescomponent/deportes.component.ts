import { Component } from "@angular/core";

@Component({

    // Nombre que se usará en las listas
    selector: "deportes-component",
    standalone: false,

    // No necesitamos ni HTML, ni CSS obligatoriamente

    //HTML
    templateUrl: './deportes.component.html',

    //CSS
    styleUrl:'./deportes.component.css'
})

export class DeportesComponent{
    public sports: Array<string>;
    public numbers: Array<number>

    constructor(){
        this.sports =["Fútbol","Baloncesto", "Tenis", "Badminton", "Golf"]
        this.numbers = [3, 66, 99, 336, 69]
    }
}