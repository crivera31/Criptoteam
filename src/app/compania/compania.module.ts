import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearEmpleoComponent } from './crear-empleo/crear-empleo.component';
import { ListarEmpleoComponent } from './listar-empleo/listar-empleo.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CrearEmpleoComponent,
    ListarEmpleoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CrearEmpleoComponent,
    ListarEmpleoComponent
  ]
})
export class CompaniaModule { }
