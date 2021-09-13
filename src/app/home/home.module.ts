import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    // Acá estarán los componentes
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    // El routing se importa
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule {
    
}
