import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authService.currentUser) {
            const token = this.authService.currentUser.token;
            if (token) {
                req = req.clone({
                    setHeaders: {
                        Authorization: token
                    }
                });
            }
        }

        return next.handle(req);
    }

}
