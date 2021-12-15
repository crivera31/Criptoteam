import { Component, OnInit } from '@angular/core';
import { EmpleosService } from "../../Services/EmpleosService";
import { Router, ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/Models/Job';
import { Modality } from '../../Models/modality';

@Component({
	selector: 'app-listar-empleo',
	templateUrl: './listar-empleo.component.html',
	styleUrls: ['./listar-empleo.component.css']
})

export class ListarEmpleoComponent implements OnInit {
	public lsjobs: Job[] = [];
	public lstModality: Modality[] = [];

	constructor(private empleosService: EmpleosService, 
				private activatedRoute: ActivatedRoute, 
				private route: Router) {
	}

	ngOnInit(): void {
		this.empleosService.getJobsByCompany(1, 10).subscribe(
			response=>{
				this.lsjobs=response.data;
			});

/*			this.lsjobs.forEach((job:any) =>{
				var date = new Date(job.attributes.created_at);
				job.created= this.datepipe.transform(date, 'yyyy-MM-dd');

			});*/

			this.empleosService.modalities().subscribe(
				res => {
				  this.lstModality = res.data;
				  console.log(res)


				}
			  )
	}
		
}
