import { Component, OnInit } from '@angular/core';
// ActiveRoute - Inyección de dependencia
// Params - es de tipado
import { ActivatedRoute, Params } from '@angular/router';

// Servicios
import { ProductsService } from '../../../core/services/products/products.service';

// Interfaces
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;

  constructor (private route: ActivatedRoute, private productService: ProductsService) {}

  // Recibir datos
  ngOnInit(): void {
    // Los parametros que tenga en la ruta
    // Como va cambiando el id, lo que vamos hacer es subscribirnos a ese cambio
    this.route.params.subscribe((params: Params) => {
      // Todos los parametros que tenga ese componente
      const id = params.id;
      this.fetchProduct(id);
      // Lo guardamos en una variable constante product
      // Verifica si es el id en los servicios
      // this.product = this.productService.getProduct(id)!;
    })
  }

  fetchProduct (id: string) {
    this.productService.getProduct(id)
    // Subscribirnos para recibir la respuesta
    .subscribe(product => {
      this.product = product;
    })
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: '../../../../assets/images/banner-1.jpg',
      price: 3000,
      description: 'asdasdasd'
    };
    
    this.productService.createProduct(newProduct)
    // Subscribirnos para recibir la respuesta
    .subscribe(product => {
      console.log(product);
    })
  }
}
