import {Component} from "@angular/core";

// Siempre debemos declarar el contenido del component
@Component({

    // Nombre del component en las vistas
    selector: "primer-component",
    standalone: false,

    // No necesitamos ni código HTML ni CSS de forma obligatoria
    template: `
    <h1> Soy un component nuevo en Angular!!! </h1>
    <h3 style="color:blue">{{year}}</h3>
    <h3 style="color:fuchsia">{{nombre}}</h3>
    `
})


// Cada component, debe tener una clase asociada en su TS
// El nombre de la clase, cada inicial en mayúsculas y 
// debemos incluir este nombre dentro del module para poder usarlo

export class PrimerComponent {

    // Aquí es dónde se declaran las variables del component, junto a su tipo de dato
    public nombre: string;
    public year: number;

    // En ANGULAR, al igual que en REACT, tenemos un constructor. Es donde
    // debemos inicializar los objetos de la clase.
    constructor () {

        // Para acceder a los objetos de la clase, se utiliza la palabra clave this
        this.nombre = "Alumno";
        this.year = 2026;
    }

}