import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AuthService} from './auth.service';
import {appPages} from './app-config';

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
    this.appPages = JSON.parse(JSON.stringify(appPages));
    if (user.isAdmin && !user.loginAs) {
      this.appPages[0].disable = true;
    } else if (!user.isAdmin) {
      this.appPages[2].disable = true;
      this.appPages[3].disable = true;
    }
  }
}
