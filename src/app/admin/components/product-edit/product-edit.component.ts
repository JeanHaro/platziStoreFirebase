import { Component, OnInit } from '@angular/core';
// FormGroup - es un grupo de controles
// FormBuilder - es una extensión de angular, que nos sirve para crear ese grupo rápidamente
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from '../../../utils/validators';

import { ProductsService } from '../../../core/services/products/products.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form!: FormGroup;
  id!: string;

  constructor(
    private formBuilder: FormBuilder, 
    private productService: ProductsService, 
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.id = params.id;
      this.productService.getProduct(this.id)
      .subscribe(product => {
        this.form.patchValue(product);
      })
    })
  }

  saveProduct(event: Event) {
    // preventDefault() - quite la acción por defecto, para que no recargue la página
    event.preventDefault();

    if (this.form.valid) {
      const product = this.form.value;
      this.productService.updateProduct(this.id, product)
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
      // Todos los formControl necesitamos editar
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

  get priceField() {
    return this.form.get('price');
  }
}


