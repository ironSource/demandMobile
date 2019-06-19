import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

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

  addNewNotification() {
    // Todo - Open modal for creating new notification;
    // if modal success creatung new notification add it to the form array.
    (this.form.get('advanced') as FormArray).push(this.buildFormGroup({name: 'new notification', value: true}));
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
