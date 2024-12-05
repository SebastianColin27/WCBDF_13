import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})

//JS orientada a objetos .ts  
export class InterpolacionComponent {
 mensaje:string='Hola mundo de la interpolacion o de las sustitución de las variables'
 nombre="Sebastian"
 edad:number=21
 correo:string='sebscolin@gmail.com'
}
