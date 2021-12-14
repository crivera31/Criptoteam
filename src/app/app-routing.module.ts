import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { ListarEmpleoComponent } from './compania/listar-empleo/listar-empleo.component';
import { HomeComponent } from './compania/home/home.component';
import { CrearEmpleoComponent } from './compania/crear-empleo/crear-empleo.component';


const routes: Routes = [
   {
        path:'',
        component:HomeComponent

    },

    {
        path:'listaEmpleos',
        component:ListarEmpleoComponent
    },

     {
        path:'crearEmpleo',
        component:CrearEmpleoComponent
    }


 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
