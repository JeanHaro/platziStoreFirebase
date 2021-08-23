// Decoradores - es un contexto a los elementos de o artefactos de angular
/* Un decordaor es la manera en que angular pueda saber esta clase que tipo de error va a cumplir, si va ser
un componente si va ser un servicio, si va ser un pype, en este caso como vamos hacer un componente vamos
a usar el decorador component */
import { Component } from '@angular/core';

// Modelo
import { Product } from '../product.model';

// Clase
// para que cualquier elemento en angular pueda usar la clase o nuestro componente usamos la palabra export
// Se coloca acá el Decorador component
// Como parametro tendrá el objeto de metadata
@Component({
    // Es el nombre como lo llamaremos en forma de etiqueta <app-product></app-product>
    selector: 'app-product',
    // A que archivo HTML vamos a llamar o estar enlazado a este componente
    templateUrl: './product.component.html',
})
export class ProductComponent {
    // Variable tipo Product (Interfaz)
    product: Product = {
        id: '1',
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 80000,
        description: 'bla bla bla bla',
    }
}