import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  login() {
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe(_ => {
        setTimeout( () => {
          this.router.navigate(['/entrace']);
        }, 100);
      });
    }
  }

}
