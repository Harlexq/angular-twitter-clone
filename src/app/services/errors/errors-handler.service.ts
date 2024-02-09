import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorsHandlerService {
  constructor() {}

  handleError(error: HttpErrorResponse) {
    let errorMessage: string;

    if (error.status === 404) {
      errorMessage = `Not Found: İstek yapılan kaynak bulunamadı.`;
    } else if (error.status === 500) {
      errorMessage = `Internal Server Error: Sunucuda bir iç hata meydana geldi.`;
    } else if (error.error instanceof ErrorEvent) {
      errorMessage = `Bir hata oluştu: ${error.error.message}`;
    } else {
      errorMessage = `Hata Mesajı: ${error.message} | Hata Kodu: ${error.status}`;
    }

    return throwError(errorMessage);
  }
}
