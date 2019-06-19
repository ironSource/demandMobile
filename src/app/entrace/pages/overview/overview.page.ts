import {Component, OnInit} from '@angular/core';
import {Campaign} from './entities/campaign.interface';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-overview',
    templateUrl: 'overview.page.html',
    styleUrls: ['overview.page.scss'],
})
export class OverviewPage implements OnInit {

    constructor(private route: ActivatedRoute) {
        this.campaigns = route.snapshot.data.campaigns.campaigns;
    }

    private campaigns: Campaign[];

    ngOnInit(): void {
    }


}
