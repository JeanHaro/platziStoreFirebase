// Decoradores - es un contexto a los elementos de o artefactos de angular
/* Un decordaor es la manera en que angular pueda saber esta clase que tipo de error va a cumplir, si va ser
un componente si va ser un servicio, si va ser un pype, en este caso como vamos hacer un componente vamos
a usar el decorador component */
// OnChanges es una interfaz
import { 
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    OnChanges, 
    SimpleChange, 
    SimpleChanges, 
    OnInit, 
    DoCheck, 
    OnDestroy 
} from '@angular/core';

// Modelo
import { Product } from '../../../core/models/product.model';

// Clase
// para que cualquier elemento en angular pueda usar la clase o nuestro componente usamos la palabra export
// Se coloca acá el Decorador component
// Como parametro tendrá el objeto de metadata
@Component({
    // Es el nombre como lo llamaremos en forma de etiqueta <app-product></app-product>
    selector: 'app-product',
    // A que archivo HTML vamos a llamar o estar enlazado a este componente
    templateUrl: './product.component.html',
    // Estilos
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
    // Variable tipo Product (Interfaz)
    // Automáticamente el componente que tenemos va a recibir ahora una propiedad desde otro componente
    @Input() product!: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    // Fecha actual
    today = new Date();

    /* Acá es donde se construye nuestro elemento o nuestro productComponent y Angular hace referencia a
    el y lo pone en interfaz */
    constructor() {
        console.log('1. constructor');
    }

    // Se encarga de detectar los cambios, cambios anteriores y nuevos
    /* ngOnChanges (changes: SimpleChanges) {
        console.log('2. ngOnChanges');
        console.log(changes);
    } */

    // Se ejecuta solo una vez y es cuando el componente ya esté puesto en pantalla
    ngOnInit() {
        console.log('3. ngOnInit');
    }

    /* ngOnChanges y ngDoCheck tienen un error de colisión ya que los dos se 
    encargan de detectar cambios */
    // ngOnChanges es nativa de Angular
    // ngDoCheck puedes ser la detección automática de cambios pero a nuestra manera
    // Se lo dejas a Angular o lo hacemos nosotros
    ngDoCheck() {
        console.log('4. DoCheck');
    }

    // Este evento solo se ejecuta cuando elemento es quitado o removido de la interfaz 
    /* Cuando queremos hacer desuscripciones a datos, tengamos una suscripción viva de datos remover y 
    eliminar bucles de memoria que podríamos llegar a tener, para apagar cualquier cosa dentro de nuestro
    componente lo podríamos utilizar porque ya se está removiendo la interfaz, esto podría limpiar
    procesos de memoria, no construyendo una mala práctica */
    ngOnDestroy() {
        console.log('5. ngOnDestroy');
    }

    addCart() {
        console.log('añadir al carrito');
        // emit() - Colocar que cosa queremos emitir depende del tipo que colocamos en el productClicked
        // Como es any es cualquier valor, si es number pide numero, etc
        // Emitirá el id del producto
        this.productClicked.emit(this.product.id);
    }
}