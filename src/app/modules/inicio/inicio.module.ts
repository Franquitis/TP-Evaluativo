import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { CardComponent } from './components/card/card.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { InicioComponent } from './pages/inicio/inicio.component';



@NgModule({
  declarations: [
    InicioComponent,
    CardComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
  ],
  exports:[
    InicioComponent,
    CardComponent,
    CarruselComponent
  ]
})
export class InicioModule { }
