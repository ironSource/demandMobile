import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs';
import {CampaignService} from 'src/app/entrace/campaign.service';
import {map} from 'rxjs/operators';
import {CampaignResponse} from '../../overview/entities/campaignResponse.interface';

@Component({
  selector: 'app-add-notificationb',
  templateUrl: './add-notificationb.component.html',
  styleUrls: ['./add-notificationb.component.scss'],
})
export class AddNotificationbComponent implements OnInit {

  form: FormGroup;
  campaigns$;

  constructor(private modalController: ModalController, private fb: FormBuilder, private campaignService: CampaignService) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [null, Validators.required]
    });
    this.campaigns$ = this.campaignService.getCampaigns()
      .pipe(
        map((value: CampaignResponse) => value.campaigns.map(item => ({name: item.name, value: item.id})))
      );
  }

  close() {
    this.modalController.dismiss();
  }

  dismiss(data) {
    this.modalController.dismiss(data);
  }
}
