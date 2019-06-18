import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-as',
  templateUrl: './login-as.page.html',
  styleUrls: ['./login-as.page.scss'],
})
export class LoginAsPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  loginAs() {
    this.authService.loginAs();
    this.router.navigate(['/entrace']);
  }

}
