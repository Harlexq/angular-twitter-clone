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
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log('ErrorHandlerInterceptor Çalıştı');
        console.log(err);

        switch (err.status) {
          case 0:
            console.log(`Api'ye Ulaşılamıyor: ${err.message}`);
            break;
          case 404:
            console.log(`Geçersiz Api: ${err.message}`);
            break;
          default:
            console.log(err);
            break;
        }
        return of();
      })
    );
  }
}
