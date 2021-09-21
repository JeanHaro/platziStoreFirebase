import { Component, OnInit } from '@angular/core';
// FormGroup - es un grupo de controles
// FormBuilder - es una extensión de angular, que nos sirve para crear ese grupo rápidamente
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Pipe
import { MyValidators } from '../../../utils/validators';
import { finalize } from 'rxjs/operators';

// Firebase
import { AngularFireStorage } from '@angular/fire/compat/storage';

// Servicio
import { ProductsService } from '../../../core/services/products/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form!: FormGroup;
  image$!: Observable<any>;

  constructor(
    private formBuilder: FormBuilder, 
    private productService: ProductsService, 
    private router: Router,
    private storage: AngularFireStorage
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

  // Cargar archivo
  uploadFile (event: Event) {
    // Archivo
    // Como solo pedimos un archivo pedimos en la posición 1
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    // Para que salga con nombre la imagen
    const name = file.name;
    // Referencia del archivo
    const fileRef = this.storage.ref(name);
    // Suba un archivo en la carpeta dir, y le mandamos el archivo(file)
    const task = this.storage.upload(name, file);

    // snapshotChanges - Permitir cuando finalizar
    task.snapshotChanges()
    .pipe(
      // Cuando finaliza
      // Obtener la URL
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          console.log(url);
          this.form.get('image')?.setValue(url);
        })
      })
    )
    // Para que se procese
    .subscribe();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      // Todos los formControl necesitamos
      id: ['', [Validators.required]],
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
