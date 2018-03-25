import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthorizationService} from '../shared/auth/auth.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthorizationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.auth.getCurrentUser()) {
      const xhr = req.clone({
        headers: req.headers.set('Authorization', this.auth.getAuthHeader())
      });
      return next.handle(xhr);
    }
    return next.handle(req.clone());
  }
}
