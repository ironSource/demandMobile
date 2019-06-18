import {Component, OnInit} from '@angular/core';
import {Campaign} from '../entities/campaign.interface';

@Component({
    selector: 'app-overview',
    templateUrl: 'campaign-overview.page.html',
    styleUrls: ['campaign-overview.page.scss'],
})
export class CampaignOverviewPage implements OnInit {

    public campaign: Campaign = {
        name: 'Some campaign name',
        id: 4296607,
        titleId: 494879,
        activationDate: '2019-06-13T14:41:00.000Z',
        expirationDate: '0000-00-00 00:00:00',
        creationDate: '2019-06-13T14:40:59.000Z',
        active: 1,
        dailyCapTime: null,
        origin: 5,
        updateCounter: 0,
        editableByDsi2: 1,
        globalTotal: 0,
        globalDaily: 0,
        payout: 1,
        paymentModel: 1,
        titleIcon: 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/0e/b6/51/0eb65141-4fb1-7d70-c8ab-e70ef11cc1c0/source/512x512bb.jpg',
        platform: 1,
        deliveryStatus: 'Pending approval',
        deliveryStatusId: 2,
        impressions: 0,
        clicks: 0,
        installs: 0,
        spend: 0,
        ipm: 0,
        ecpm: 0,
        ecpi: 0,
        ad_revenue_7d: 0,
        iap_revenue_7d: 0,
        arpu_7d: 0,
        roas_7d: 0
    };

    constructor() {
    }

    ngOnInit(): void {
    }


}
