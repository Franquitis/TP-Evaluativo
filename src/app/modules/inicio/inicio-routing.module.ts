import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  //se dejan las comillas vacias para que al iniciar se renderice Inicio
  {
    path:"",component:InicioComponent
  },
  //se rutea el componente inicio
  {
    path:"inicio",component:InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
