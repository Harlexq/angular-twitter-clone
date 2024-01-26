import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  api: string = environment.api;

  constructor(private http: HttpClient) {}

  setApi(api: string, differentEndPoint: boolean) {
    if (differentEndPoint) {
      return api;
    } else return this.api + api;
  }

  get<T>(
    api: string,
    callBack: (res: HttpEvent<T>) => void,
    differentEndPoint: boolean = false,
    options: any = {}
  ) {
    let apiUrl = this.setApi(api, differentEndPoint);
    this.http.get<T>(apiUrl, options).subscribe({
      next: (res) => callBack(res),
    });
  }

  post<T>(
    api: string,
    model: any,
    callBack: (res: HttpEvent<T>) => void,
    differentEndPoint: boolean = false,
    options: any = {}
  ) {
    let apiUrl = this.setApi(api, differentEndPoint);
    this.http.post<T>(apiUrl, model, options).subscribe({
      next: (res) => callBack(res),
    });
  }

  put<T>(
    api: string,
    model: any,
    callBack: (res: HttpEvent<T>) => void,
    differentEndPoint: boolean = false,
    options: any = {}
  ) {
    let apiUrl = this.setApi(api, differentEndPoint);
    this.http.put<T>(apiUrl, model, options).subscribe({
      next: (res) => callBack(res),
    });
  }

  delete<T>(
    api: string,
    callBack: (res: HttpEvent<T>) => void,
    differentEndPoint: boolean = false,
    options: any = {}
  ) {
    let apiUrl = this.setApi(api, differentEndPoint);
    this.http.delete<T>(apiUrl, options).subscribe({
      next: (res) => callBack(res),
    });
  }
}
