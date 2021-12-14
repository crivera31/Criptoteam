import { Injectable } from '@angular/core';
import { urlApi,api_key } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { JobDto } from '../Models/JobDto';

@Injectable({
	providedIn: 'root'
})

export class EmpleosService{
	
	constructor( private http: HttpClient){}

	getJobsByCompany(page: number, per_page: number, expand: String): Observable<JobDto[]>{
			return this.http.get(urlApi + '/jobs?api_key='+api_key+'&per_page='
			+page+'&page='+per_page+'&expand='+expand ).pipe(
				map((response:any) =>{
					return response as JobDto[];
				})
			)
	}

}