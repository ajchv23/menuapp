import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    
    mostrar:boolean = false;

    frase:any = {
        mensaje: 'Todo gran poder conlleva una gran responsabilidad',
        autor: 'Ben Parker',
        mostrar: true
    };

    personajes:string[] = ['Spiderman','Venus','Octupus']
}