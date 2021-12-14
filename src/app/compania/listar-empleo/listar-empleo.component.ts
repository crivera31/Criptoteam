import { Component, OnInit } from '@angular/core';
import { EmpleosService } from '../../Services/EmpleosService'
@Component({
  selector: 'app-listar-empleo',
  templateUrl: './listar-empleo.component.html',
  styleUrls: ['./listar-empleo.component.css']
})
export class ListarEmpleoComponent implements OnInit {

  constructor(private empleosService: EmpleosService) { }

  ngOnInit(): void {
  		this.empleosService.getJobsByCompany(1,10,'["questions"]').subscribe(
  				data=>{
  					console.log('Success '+ data)
  				},
  				error=>{
  					console.log('Error')
  				}
  		)
  }
}
