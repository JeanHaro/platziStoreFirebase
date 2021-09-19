import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField!: FormControl;

  constructor() {
    // Como parámetro en FormControl, es como vamos a validar
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.email
    ])
    // Para controlar los datos
    /* this.emailField.valueChanges
    .subscribe(value => {
      console.log(value);
    }) */
  }

  ngOnInit() {
  }

  sendMail() {
    if (this.emailField.valid) {
      // Si es valido me va a devolver el valor que tenemos actualmente
      console.log(this.emailField.value);
    }
  }
}
