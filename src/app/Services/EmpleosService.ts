import { injectable } from '@angular/core';
import { urlApi } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { JobDto } from '../Models/JobDto';

@Injectable({
	provideIn: 'root'
})

export class EmpleosService{
	
	constructor(private http:HttpClient)}{}

	getJobsByCompany(): Observable<JobDto[]>{
			return this.http.get(urlApi + '/jobs?').pipe(
				map((response:any) =>{
					return response as JobDto[];
				})
			)
	}

}