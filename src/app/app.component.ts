import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AuthService} from './auth.service';
import {advertiserAppPages, LoginAsAppPages, adminAppPages} from './app-config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  public appPages;

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
    const user = this.authService.currentUser;
    if (user.loginAs) {
      this.appPages = [...LoginAsAppPages];
    } else if (user.isAdmin) {
      this.appPages = [...adminAppPages];
    } else {
      this.appPages = [...advertiserAppPages];
    }
  }
}
