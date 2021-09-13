/* ElementRef es el que va a modificar el comportamiento por defecto del DOM */
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( element: ElementRef ) { 
    // referenciar a ese element y pedir el elemento nativo y modificarlo
    element.nativeElement.style.backgroundColor = '#121f3d';
  }
}
