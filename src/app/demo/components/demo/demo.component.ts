import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  // Variables serán renderizadas en ese template
  // Se puede llamar desde el archivo app.component.html con String Interpolation
  /* Las variables que tengamos acá, son variables que podemos mostrar o renderizar en nuestro archivo 
  app.component.html */
  title = 'platzi-store';

  // Array
  items = ['Jean', 'Julian', 'Perez'];

  objeto = {};

  power = 10;

  ngOnInit() {
    // code
  }

  // Metodo
  addItem() {
    // Hacer una referencia a nuestros Items
    // push() es para añadir un nuevo elemento a nuestro Array
    this.items.push('nuevo item');
  }

  // Eliminar un item
  // Parámetro de entrada es la posición
  deleteItem (index: number) {
    // splice() - es para eliminar un elemento del array e indicandole la posición que queremos borrar
    // primer parámetro se indica en que posición se empieza a borrar
    // segundo elemento se indica cuantos elementos se quieren borrar
    this.items.splice(index, 1);
  }
}
