import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenizeReq = req.clone({
      setHeaders: {
        Autorization: `Bearer ${this.authService.getToken()}`
      }
    })
    return next.handle(tokenizeReq)
  }

}
