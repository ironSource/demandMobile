import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {ModalController} from '@ionic/angular';
import {AddNotificationbComponent} from './add-notificationb/add-notificationb.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, public modalController: ModalController) {}

  ngOnInit() {
    this.form = this.fb.group({
      basic: this.fb.array([
        this.buildFormGroup({name: 'Daily budget capping', value: true}),
        this.buildFormGroup({name: 'Total budget capping', value: false})
      ]),
      advanced: this.fb.array([])
    });
    this.initLisnters();
  }

  async addNewNotification() {
    const modal = await this.modalController.create({
      component: AddNotificationbComponent
    });
    await modal.present();
    const data: any = await modal.onDidDismiss();
    if (data && data.data && data.data.name) {
      (this.form.get('advanced') as FormArray).push(this.buildFormGroup({name: data.data.name, value: true}));
    }

  }

  private buildFormGroup({name, value}): FormGroup {
    return this.fb.group({
      name: [name],
      value: [value]
    });
  }

  private initLisnters() {
    this.form.get('basic').valueChanges.subscribe(console.log);
    // Todo - send http request to update notification status
  }

}
