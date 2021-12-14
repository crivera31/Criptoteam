import { Component, OnInit } from '@angular/core';
import { EmpleosService } from "../../Services/EmpleosService";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-listar-empleo',
	templateUrl: './listar-empleo.component.html',
	styleUrls: ['./listar-empleo.component.css']
})
export class ListarEmpleoComponent implements OnInit {

	constructor(private empleosService: EmpleosService, 
				private activatedRoute: ActivatedRoute, 
				private route: Router) {
	}

	ngOnInit(): void {
		this.empleosService.getJobsByCompany(1, 10).subscribe(
			response=>{
				console.log('Success ' + response)
			});
	}

  	
}
