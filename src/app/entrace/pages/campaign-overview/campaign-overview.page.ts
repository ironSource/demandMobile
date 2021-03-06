import {Component, OnInit} from '@angular/core';
import {Campaign} from '../overview/entities/campaign.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {OptimizeModalPage} from './optimize-modal/optimize-modal.page';
import {EditBudgetModalPage} from './edit-budget-modal/edit-budget-modal.page';

@Component({
    selector: 'app-overview',
    templateUrl: 'campaign-overview.page.html',
    styleUrls: ['campaign-overview.page.scss'],
})
export class CampaignOverviewPage implements OnInit {

    public campaign: Campaign;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private modalController: ModalController) {
        this.campaign = route.snapshot.data.campaign;
    }

    ngOnInit(): void {
    }

    async openOptimizeModal() {
        const modal: HTMLIonModalElement =
            await this.modalController.create({
                component: OptimizeModalPage,
                componentProps: {
                    campaign: this.campaign
                }
            });

        modal.onDidDismiss().then((detail: any) => {
            if (detail !== null) {
                console.log('The result:', detail.data);
            }
        });

        await modal.present();
    }

    async openEditBudgetModal() {
        const modal: HTMLIonModalElement =
            await this.modalController.create({
                component: EditBudgetModalPage,
                componentProps: {
                    campaign: this.campaign
                }
            });

        modal.onDidDismiss().then((detail: any) => {
            if (detail !== null) {
                this.campaign.globalDaily = detail.data;
            }
        });

        await modal.present();
    }

    getBudgetText(value: number) {
        return value ? value : 'Unlimited';
    }

    onBack() {
        this.router.navigate(['/entrace']);
    }


}
