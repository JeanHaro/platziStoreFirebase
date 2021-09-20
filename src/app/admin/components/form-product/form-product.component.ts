import { Component, OnInit } from '@angular/core';
// FormGroup - es un grupo de controles
// FormBuilder - es una extensión de angular, que nos sirve para crear ese grupo rápidamente
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private productService: ProductsService, 
    private router: Router
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event) {
    // preventDefault() - quite la acción por defecto, para que no recargue la página
    event.preventDefault();

    if (this.form.valid) {
      const product = this.form.value;
      this.productService.createProduct(product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        // Una ruta que le damos
        this.router.navigate(['./admin/products'])
      });
    }

    console.log(this.form.value);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      // Todos los formControl necesitamos
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }
}
