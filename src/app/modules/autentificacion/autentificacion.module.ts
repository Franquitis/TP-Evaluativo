import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './pages/registro/registro.component';



@NgModule({
  declarations: [
    InicioSesionComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AutentificacionModule { }
