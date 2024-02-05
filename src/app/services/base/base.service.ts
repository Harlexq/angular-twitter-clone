import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorsService } from '../errors/errors.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService extends ErrorsService {
  apiUrl: string = environment.api;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {}

  get(api: string, callBack: (res: any) => void) {
    this.http.get(`${this.apiUrl + api}`, {}).subscribe({
      next: (res) => {
        callBack(res);
      },
      error: (err: HttpErrorResponse) => {
        this.errorHandler(err);
      },
    });
  }

  post(api: string, model: any, callBack: (res: any) => void) {
    this.http.post(`${this.apiUrl + api}`, model, {}).subscribe({
      next: (res) => {
        callBack(res);
      },
      error: (err: HttpErrorResponse) => {
        this.errorHandler(err);
      },
    });
  }

  put(api: string, model: any, callBack: (res: any) => void) {
    this.http.put(`${this.apiUrl + api}`, model).subscribe({
      next: (res) => {
        callBack(res);
      },
      error: (err: HttpErrorResponse) => {
        this.errorHandler(err);
      },
    });
  }

  delete(api: string, callBack: (res: any) => void) {
    this.http.delete(`${this.apiUrl + api}`).subscribe({
      next: (res) => {
        callBack(res);
      },
      error: (err: HttpErrorResponse) => {
        this.errorHandler(err);
      },
    });
  }
}
