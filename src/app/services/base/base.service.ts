import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorsHandlerService } from '../errors/errors-handler.service';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService extends ErrorsHandlerService {
  apiUrl: string = 'http://localhost:2500/';

  constructor(private http: HttpClient) {
    super();
  }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer token',
    });
  }

  get(api: string, callBack: (res: any) => void) {
    this.http
      .get(`${this.apiUrl + api}`, { headers: this.getHeaders() })
      .pipe(catchError((err: HttpErrorResponse) => this.handleError(err)))
      .subscribe({
        next: (res) => {
          callBack(res);
        },
      });
  }

  getDetail(api: string, id: string | number, callBack: (res: any) => void) {
    this.http
      .get(`${this.apiUrl + api + '/' + id}`, {
        headers: this.getHeaders(),
      })
      .pipe(catchError((err: HttpErrorResponse) => this.handleError(err)))
      .subscribe({
        next: (res) => {
          callBack(res);
        },
      });
  }

  post(api: string, model: any, callBack: (res: any) => void) {
    this.http
      .post(`${this.apiUrl + api}`, model, { headers: this.getHeaders() })
      .pipe(catchError((err: HttpErrorResponse) => this.handleError(err)))
      .subscribe({
        next: (res) => {
          callBack(res);
        },
      });
  }

  put(api: string, model: any, callBack: (res: any) => void) {
    this.http
      .put(`${this.apiUrl + api}`, model, { headers: this.getHeaders() })
      .pipe(catchError((err: HttpErrorResponse) => this.handleError(err)))
      .subscribe({
        next: (res) => {
          callBack(res);
        },
      });
  }

  delete(api: string, data: any, callBack: (res: any) => void) {
    this.http
      .delete(`${this.apiUrl + api}`, {
        headers: this.getHeaders(),
        body: data,
      })
      .pipe(catchError((err: HttpErrorResponse) => this.handleError(err)))
      .subscribe({
        next: (res) => {
          callBack(res);
        },
      });
  }
}
