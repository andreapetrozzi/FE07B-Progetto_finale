import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../_services/auth.service';



@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
    ): Observable<HttpEvent<any>> {

      let ok: string;
      let authReq: HttpRequest<any> = req;{
        authReq = req.clone({
          headers: req.headers

          .set(
            'Authorization',
            'Bearer ' +
              'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0NjgzNTE3MiwiZXhwIjoxNjQ3Njk5MTcyfQ.wspq3MB_wJKMeLKUcUpNcyiWX0BI5fqeSqhg2HIsA3zWdhSv_Wdyer7Nf_35pZvd1b91i7tsRftZp0n3qTF3bQ'
              )
              .set('X-TENANT-ID', 'fe_0721b')});

              return next.handle(authReq).pipe(
                tap(
                  event => {
                    ok = event instanceof HttpResponse ? 'succeeded' : ''
                  },
                  error => { }
                  ),
                  catchError((error: HttpErrorResponse) => {
                    return throwError(error);
                  }),
                  finalize(() => {
                  })
              );
      }
  }
}

