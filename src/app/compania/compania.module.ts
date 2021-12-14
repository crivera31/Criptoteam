import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearEmpleoComponent } from './crear-empleo/crear-empleo.component';
import { ListarEmpleoComponent } from './listar-empleo/listar-empleo.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{ path: '', component: ListarEmpleoComponent }]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [
      HomeComponent
    ],
})


export class CompaniaModule { }
