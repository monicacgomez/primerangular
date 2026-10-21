import { Component } from "@angular/core";

@Component({
    selector: "app-forms-binding",
    standalone: false,
    templateUrl: './forms.binding.component.html'
})

export class FormsBindingComponent {
    public user: any;
    public mensaje: string;

    constructor() {
        this.mensaje = "";
        this.user = {
            nombre: "",
            apellidos: "",
            edad: 0
        }
    }

    recibirDatos(): void {
        this.mensaje = "¡Datos recibidos!";
    }
}