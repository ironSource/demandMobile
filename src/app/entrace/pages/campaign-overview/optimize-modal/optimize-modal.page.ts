import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {Campaign} from '../../overview/entities/campaign.interface';

@Component({
  selector: 'app-optimize-modal',
  templateUrl: './optimize-modal.page.html',
  styleUrls: ['./optimize-modal.page.scss'],
})
export class OptimizeModalPage implements OnInit {

  constructor(private modalController: ModalController,
              private navParams: NavParams) { }

  private campaign: Campaign;
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.campaign = this.navParams.get('campaign');
  }

  close() {
    this.modalController.dismiss();
  }

  async onDismiss() {
    const result: any = '';

    await this.modalController.dismiss(result);
  }

}
