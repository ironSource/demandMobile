import {Component, OnInit} from '@angular/core';
import {AuthService} from 'src/app/auth.service';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-as',
  templateUrl: './login-as.page.html',
  styleUrls: ['./login-as.page.scss'],
})
export class LoginAsPage implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, Validators.required]
    });
  }

  loginAs() {
    if (this.form.valid) {
      this.authService.loginAs();
      this.router.navigate(['/entrace']);
    }
  }

}
