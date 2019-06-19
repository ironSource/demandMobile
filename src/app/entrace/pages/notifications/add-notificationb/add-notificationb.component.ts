import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add-notificationb',
  templateUrl: './add-notificationb.component.html',
  styleUrls: ['./add-notificationb.component.scss'],
})
export class AddNotificationbComponent implements OnInit {

  form: FormGroup;

  constructor(private modalController: ModalController, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [null]
    });
  }

  close() {
    this.modalController.dismiss();
  }

  dismiss(data) {
    this.modalController.dismiss(data);
  }
}
