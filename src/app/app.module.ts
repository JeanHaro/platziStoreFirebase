import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Para que tenga consecuencia FormsModule, lo agregamos en los imports
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { ProductComponent } from './components/product.component';
import { CartComponent } from './cart/cart.component';
import { ExponentialPipe } from './exponential.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    // Se coloca acá los componentes
    AppComponent,
    ProductComponent,
    CartComponent,
    ExponentialPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
