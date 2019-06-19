import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AuthService} from './auth.service';
import {appPages} from './app-config';
import {User} from './entities/user-entity';
import {PushService} from './push.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  public appPages;
  user: User;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.authService.userStateChanged$.subscribe(_ => {
      this.initializeAppPages();
    });
  }

  logout() {
    this.authService.logout();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private initializeAppPages(): void {
    this.user = this.authService.currentUser;
    this.appPages = JSON.parse(JSON.stringify(appPages));
    if (this.user && this.user.isAdmin && !this.user.loginAs) {
      this.appPages[0].disable = true;
    } else if (this.user && !this.user.isAdmin) {
      this.appPages[2].disable = true;
      this.appPages[3].disable = true;
    }
  }
}
