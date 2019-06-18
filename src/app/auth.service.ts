import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserToken: string;

  constructor(private storage: Storage) {}

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

}
