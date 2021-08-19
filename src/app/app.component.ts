import { Component } from '@angular/core';

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
}
