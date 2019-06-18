import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    private activeUser: any;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.activeUser = JSON.parse(localStorage.getItem('activeUser'));
        if (this.activeUser && this.activeUser.token) {
            // add authorization header with jwt token
            req = req.clone({
                setHeaders: {
                    Authorization: this.activeUser.token
                }
            });
        }
        return next.handle(req);
    }

}
