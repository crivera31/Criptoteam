import { Component, OnInit } from '@angular/core';
import { EmpleosService } from "../../Services/EmpleosService";
import { Router, ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/Models/Job';
import { Modality } from '../../Models/modality';
import { Seniority } from 'src/app/Models/seniorities';
import { Category } from 'src/app/Models/category';
import { map } from 'rxjs/operators';
@Component({
	selector: 'app-listar-empleo',
	templateUrl: './listar-empleo.component.html',
	styleUrls: ['./listar-empleo.component.css']
})

export class ListarEmpleoComponent implements OnInit {
	public lsjobs: Job[] = [];
	public lsJobsAux: Job[] = [];
	public lstModality: Modality[] = [];
	public lstSeniorities: Seniority[] = [];
	public lstCategories: Category[] = [];
	public optionSelectedCategory : string='NA';
	public optionSelectedSeniority : string='NA';

	constructor(private empleosService: EmpleosService,
		private activatedRoute: ActivatedRoute,
		private route: Router) {
	}

	ngOnInit(): void {
		
		this.empleosService.seniorities().subscribe(
			res => {
				this.lstSeniorities = res.data;
				console.log(this.lstSeniorities)
			}
		)
		
		
		this.empleosService.getJobsByCompany(1, 10).subscribe(
			response => {
				this.lsjobs = response.data;
				this.lsJobsAux= response.data;

				this.lsjobs.forEach( item=>{
					if (item.attributes.country=== 'Remoto'){
						item.attributes.country='N/A';
					}					
				
					if (item.attributes.state=== 'submitted'){
						item.attributes.state='Publicada';
					}	

					if (item.attributes.state === 'draft'){
						item.attributes.state='En Proceso';
					}					

					this.lstSeniorities.forEach(element => {
						if (parseInt(element.id) == item.attributes.seniority.data.id){
							item.attributes.seniority.data.type=element.attributes.name;
						} 
					});
				});

			});


		this.empleosService.modalities().subscribe(
			res => {
				this.lstModality = res.data;
				console.log(res)


			}
		)

		

		this.empleosService.categories().subscribe(
			res => {
				this.lstCategories = res.data;
				console.log('categories '+ this.lstCategories)
			}
		)
	}

	search(){
		const selected=this.optionSelectedCategory;
		const selectedSe=this.optionSelectedSeniority;
		
		var listAux= this.lsjobs;
		if( selected !== 'NA'){
			this.lsJobsAux=listAux.filter(function(element){
				return element.attributes.category_name === selected;
			});
		}else if(selectedSe !== 'NA'){
			this.lsJobsAux= listAux.filter(function(element){
				return element.attributes.seniority.data.type === selected;
			});
		}else{
			this.lsJobsAux=this.lsjobs;
		}
		console.log("okokok");
	}

	/*senioritySelected(){
		this.optionSelectedSeniority=
	}
	categorySelected(){

	}*/
}
