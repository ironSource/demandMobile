import {Component, OnInit} from '@angular/core';
import {Campaign} from '../overview/entities/campaign.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {OptimizeModalPage} from './optimize-modal/optimize-modal.page';

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
                    aParameter: true,
                    otherParameter: new Date()
                }
            });

        modal.onDidDismiss().then((detail: any) => {
            if (detail !== null) {
                console.log('The result:', detail.data);
            }
        });

        await modal.present();
    }

    onBack() {
        this.router.navigate(['/entrace']);
    }


}
