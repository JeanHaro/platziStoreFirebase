import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { SharedModule } from '../shared/shared.module';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';

@NgModule({
    // Acá estarán los componentes
    declarations: [
        PageNotFoundComponent
    ],
    // El routing se importa
    imports: [
        CommonModule,
        SharedModule,
        PageNotFoundRoutingModule
    ]
})
export class PageNotFoundModule {
    
}
