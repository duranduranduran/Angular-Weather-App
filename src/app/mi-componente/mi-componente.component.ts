import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent {
  edad: number;
  nombres: Array<string>;

  constructor(){
    this.edad = 22;
    this.nombres =  ['Alice', 'Bob', 'Charlie', 'David', 'Emily', 'Frank', 'Grace', 'Henry', 'Isabel', 'Jack']
  }
ngOnInit(): void{
  console.log('componente mi-componente cargardo')
}

aumentarEdad(){
this.edad ++;
}

disminuirEdad() {
  this.edad--;

}
}
