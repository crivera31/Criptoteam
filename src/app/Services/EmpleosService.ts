import { Injectable } from '@angular/core';
import { urlApi, api_key } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JobDto } from '../Models/JobDto';
import { AttributeDto } from '../Models/AttributeDto';


@Injectable({
	providedIn: 'root'
})


export class EmpleosService {

	constructor(private http: HttpClient) { }

	getJobsByCompany(pageNumber: number, per_page: number): Observable<any> {
		return this.http.get(urlApi + '/jobs?api_key=' + api_key + '&per_page='
			+ per_page + '&page=' + pageNumber );
	}

	modalities(): Observable<any> {
		return this.http.get(urlApi + '/modalities');
	}

	seniorities(): Observable<any> {
		return this.http.get(urlApi + '/seniorities');
	}

	crearJob(job: AttributeDto): Observable<any>{
		const params = new HttpParams()
						.set('api_key', api_key)
						.set('title',job.title || '')
						.set('description', job.description || '')
						.set('description_headline', job.description_headline || '')
						.set('functions', job.functions || '')
						.set('tenant_city_id', '130')
						.set('min_salary', job.min_salary || '')
						.set('max_salary', job.max_salary || '')
						.set('remote_modality', 'fully_remote')
						.set('seniority_id','4')
						.set('perks', 'pet_friendly, internal_talks,informal_dresscode, life_insurance');
						console.log(params.toString());
		return this.http.post(urlApi + '/jobs',{}, { params });
	}

	categories(): Observable<any> {
		return this.http.get(urlApi + '/categories');
	}

	cities(): Observable<any> {
		return this.http.get(urlApi + '/cities');
	}
}
