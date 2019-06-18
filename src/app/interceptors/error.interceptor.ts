import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {AuthService} from '../auth.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                catchError((error, caught) => {
                    if (error.status === 401) {
                        // auto logout if 401 response returned from api
                        this.authService.logout();
                    }
                    const err = (error.error && error.error.message) || error.statusText;
                    return throwError(err);
                })
            );
    }
}
