import { Component, OnInit } from '@angular/core';

// Interface
import { Product } from '../../../core/models/product.model';

// Servicio
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // Productos
  products: Product[] = [];

  constructor (private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct (id: number) {
    console.log('product');
    console.log(id);
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    // Por defecto devuelve un observable, asi que tenemos que subscribirnos para obtener la respuesta
    .subscribe(products => {
      this.products = products;
    })
  }
}
