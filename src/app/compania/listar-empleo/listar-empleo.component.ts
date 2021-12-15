import { Component, OnInit } from '@angular/core';
import { EmpleosService } from "../../Services/EmpleosService";
import { Router, ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/Models/Job';
import { Modality } from '../../Models/modality';
import { Seniority } from 'src/app/Models/seniorities';
import { Category } from 'src/app/Models/category';
@Component({
	selector: 'app-listar-empleo',
	templateUrl: './listar-empleo.component.html',
	styleUrls: ['./listar-empleo.component.css']
})

export class ListarEmpleoComponent implements OnInit {
	public lsjobs: Job[] = [];
	public lstModality: Modality[] = [];
	public lstSeniorities: Seniority[] = [];
	public lstCategories: Category[] = [];

	constructor(private empleosService: EmpleosService,
		private activatedRoute: ActivatedRoute,
		private route: Router) {
	}

	ngOnInit(): void {
		this.empleosService.getJobsByCompany(1, 10).subscribe(
			response => {
				this.lsjobs = response.data;
			});


		this.empleosService.modalities().subscribe(
			res => {
				this.lstModality = res.data;
				console.log(res)


			}
		)

		this.empleosService.seniorities().subscribe(
			res => {
				this.lstSeniorities = res.data;
				console.log(this.lstSeniorities)
			}
		)

		this.empleosService.categories().subscribe(
			res => {
				this.lstCategories = res.data;
				console.log('categories '+ this.lstCategories)
			}
		)
	}

}
