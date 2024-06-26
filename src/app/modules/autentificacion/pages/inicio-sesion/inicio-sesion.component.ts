import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {

  constructor(
    public servicoAuth: AuthService,
    public servicioFireStore: FirestoreService,
    public servicioRutas: Router
  ){}

  usuarioIngresado:Usuario={
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  hide = true;
 

//funcion para iniciar sesion
    async iniciarSesion(){

  const credenciales= {
    email:this.usuarioIngresado.email,
    password:this.usuarioIngresado.password
  }
  const res= await this.servicoAuth.iniciarSesion(credenciales.email, credenciales.password)
  .then(res =>{
    alert('se pudo iniciar sesion');
    this.servicioRutas.navigate(['/Inicio'])
  })
  .catch(err =>{
    alert('no se pudo iniciar sesion'+err)

    this.LimpiarInputs();
  })
 }

 LimpiarInputs(){
  const inputs={
    email: this.usuarioIngresado.email='',
    password:this.usuarioIngresado.password='',
  }
 }

 }