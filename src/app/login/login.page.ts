import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

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
    private router: Router,
    public toastController: ToastController) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  login() {
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe(_ => {
        setTimeout(() => {
          this.router.navigate(['/entrace']);
        }, 100);
      },
        err => {
          (async () => {
            const toast = await this.toastController.create({
              message: 'Faild to login',
              duration: 2000
            });
            toast.present();
          })();

        });
    }
  }

}
