import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';
import {ApiResponseModel} from '../models/api.response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  testConnection(): Observable< ApiResponseModel<string>>  {
    return this.http.get<ApiResponseModel<string>>(environment.apiURL + 'test').pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof  ErrorEvent) {
      console.error('xxx');
    } else {
      console.error('yyy');
    }
    return throwError('is error');
  }
}
