import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Componentes
import { DemoComponent } from './components/demo/demo.component';

import { SharedModule } from '../shared/shared.module';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
    // Acá estarán los componentes
    declarations: [
        DemoComponent
    ],
    // El routing se importa
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        DemoRoutingModule
    ]
})
export class DemoModule {
    
}
