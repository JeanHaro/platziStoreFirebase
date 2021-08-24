import { Component } from '@angular/core';

// Interface
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  // la maquetación
  templateUrl: './app.component.html',
  // archivos de estilos
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Variables serán renderizadas en ese template
  // Se puede llamar desde el archivo app.component.html con String Interpolation
  /* Las variables que tengamos acá, son variables que podemos mostrar o renderizar en nuestro archivo 
  app.component.html */
  title = 'platzi-store';

  // Array
  items = ['Jean', 'Julian', 'Perez'];

  power = 10;

  // Productos
  products: Product[] = [{
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];

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

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }
}
