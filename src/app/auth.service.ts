import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {tap} from 'rxjs/operators';
import {of, Subject, BehaviorSubject} from 'rxjs';

const loginPath = `${environment.host}/platformjs/auth/login`;

import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {User} from './entities/user-entity';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private userStateSubject$ = new BehaviorSubject(true);
    public currentUser: User;
    public userStateChanged$ = this.userStateSubject$.asObservable();

    constructor(
        private storage: Storage,
        private http: HttpClient,
        private splashScreen: SplashScreen) {
    }

    async getToken() {
        const user =  JSON.parse(await this.storage.get('user'));
        this.currentUser = user;
    }

    setUser(user: User): void {
        this.storage.set('user', JSON.stringify(user));
        this.currentUser = Object.assign({}, user);
    }

    isAdmin(token: string) {
        const base64 = atob(token);
        return base64.split(':').length > 3;
    }

    login({username, password}: { username: string, password: string }) {
        const mockRequest$ = of({
            token: 'MWMwYzBiZmIzYmMxOjE1NjM0NTk2MDA6MDAyOGYxOWNhMjU4ZmFhMWIyYWM3N2VjNDRkMzI0MWM=',
            expiration: '2019-07-18'
        });
        return this.http.post(loginPath, {username, password})
            .pipe(
                tap((val: any) => {
                    this.setUser(val);
                })
            );
    }

    logout() {
        this.storage.clear().then(() => {
            this.splashScreen.show();
            window.location.reload();
            this.currentUser = null;
        });
    }

    loginAs() {
        this.currentUser.loginAs = 'Advenced asfdasdfsdf';
        this.userStateSubject$.next(true);
    }

}
