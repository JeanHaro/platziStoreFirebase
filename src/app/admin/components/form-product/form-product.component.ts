import { Component, OnInit } from '@angular/core';
// FormGroup - es un grupo de controles
// FormBuilder - es una extensión de angular, que nos sirve para crear ese grupo rápidamente
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.buildForm();
  }

  ngOnInit(): void {
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
