import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {tap} from 'rxjs/operators';
import {of, Subject, BehaviorSubject} from 'rxjs';

const loginPath = `${environment.host}/partners/auth/login`;

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
    private splashScreen: SplashScreen) {}

  async getToken() {
    const token = await this.storage.get('token');
    this.currentUser = {token, isAdmin: this.isAdmin(token)};
  }

  setToken(token: string): void {
    this.storage.set('token', token);
    this.currentUser = {token, isAdmin: this.isAdmin(token)};
  }

  isAdmin(token: string) {
    const base64 = atob(token);
    return base64.split(':').length > 3;
  }

  login({username, password}: {username: string, password: string}) {
    const mockRequest$ = of({
      token: 'MGIxYTBjMDNiZWY5OjE1NjM0NDYxNzI6N2ZkYTAzMmIwMGM0NjVkZDRjMjMzOGQ0NTEwMmM4Yjg=',
      expiration: '2019-07-18'
    });
    const request$ = this.http.post(loginPath, {username, password});
    return mockRequest$.pipe(
      tap(val => this.setToken(`Advanced ${val.token}`))
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
