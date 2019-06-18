import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserToken: string;

  constructor(private storage: Storage, private splashScreen: SplashScreen) {}

  async getToken() {
    if (!this.currentUserToken) {
      const token = await this.storage.get('token');
      this.currentUserToken = token;
    }
    return this.currentUserToken;
  }

  setToken(value: string): void {
    this.storage.set('token', value);
  }

  logout() {
    // remove user from local storage to log user out
    this.storage.clear().then(() => {
      this.splashScreen.show();
      window.location.reload();
    });

  }

}
