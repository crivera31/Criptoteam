import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEmpleoComponent } from './listar-empleo/listar-empleo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CrearEmpleoComponent } from './crear-empleo/crear-empleo.component';




@NgModule({
  declarations: [
    HomeComponent,
    CrearEmpleoComponent,
    ListarEmpleoComponent
  ],
  exports: [
    HomeComponent,
    CrearEmpleoComponent,
    ListarEmpleoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})


export class CompaniaModule { }
