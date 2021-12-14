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

	getJobsByCompany(pageNumber: number, per_page: number): Observable<JobDto[]> {
		return this.http.get(urlApi + '/jobs?api_key=' + api_key + '&per_page='
			+ per_page + '&page=' + pageNumber ).pipe(
				map((response: any) => {
					return response as JobDto[];
				})
			);
	}

	modalities(): Observable<any> {
		return this.http.get(urlApi + '/modalities');
	}

	crearJob(job: AttributeDto): Observable<any>{
		const params = new HttpParams()
						.set('api_key', api_key)
						.set('title',job.title || '')
						.set('description', job.description || '')
						.set('description_headline', job.description_headline || '')
						.set('functions', job.functions || '')
						.set('remote_modality', job.remote_modality || '')
						.set('min_salary', job.min_salary || '')
						.set('max_salary', job.max_salary || '');

		return this.http.post(urlApi + '/jobs', { params });
	}

}
