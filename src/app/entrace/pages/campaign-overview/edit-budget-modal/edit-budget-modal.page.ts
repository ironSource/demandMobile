import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {Campaign} from '../../overview/entities/campaign.interface';

@Component({
  selector: 'app-edit-budget-modal',
  templateUrl: './edit-budget-modal.page.html',
  styleUrls: ['./edit-budget-modal.page.scss'],
})
export class EditBudgetModalPage implements OnInit {

  constructor(private modalController: ModalController,
              private navParams: NavParams) { }

  private campaign: Campaign;
  public budget: number;
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.campaign = this.navParams.get('campaign');
    this.budget = this.campaign.globalDaily;
  }

  close() {
    this.modalController.dismiss();
  }

  async onDismiss() {
    const result: any = this.budget;

    await this.modalController.dismiss(result);
  }

}
