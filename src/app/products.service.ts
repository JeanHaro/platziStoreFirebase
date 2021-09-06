import { Injectable } from '@angular/core';

// Interfaces
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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

  constructor() { }

  // Método que te devuelve todos los productos 
  getAllProducts() {
    return this.products;
  }

  // Recibe el id del producto que queremos buscar
  getProduct (id: string) {
    // find es para encontrar un valor, donde se manda una función
    // Si el id coincide con el item.id, ese será el producto que les va a devolver
    return this.products.find(item => id === item.id);
  }
}
