import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('AuthInterceptor Çalıştı');

    req = req.clone({
      headers: req.headers.set(
        'Authorization',
        'Bearer ' + 'token bilgisi gelicek'
      ),
    });
    return next.handle(req);
  }
}
