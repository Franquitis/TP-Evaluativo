import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { QuienessomosComponent } from './pages/quienessomos/quienessomos.component';


@NgModule({
  declarations: [
    ContactoComponent,
    QuienessomosComponent
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule
  ]
})
export class InformacionModule { }
