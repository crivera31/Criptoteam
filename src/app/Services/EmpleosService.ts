import { Injectable } from '@angular/core';
import { urlApi, api_key } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JobDto } from '../Models/JobDto';


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

}
