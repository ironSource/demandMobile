import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormGroup, FormBuilder} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-add-notificationb',
  templateUrl: './add-notificationb.component.html',
  styleUrls: ['./add-notificationb.component.scss'],
})
export class AddNotificationbComponent implements OnInit {

  form: FormGroup;
  campaigns$ = new BehaviorSubject<any>([{name: 'campaign 1', value: 1}]);

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
