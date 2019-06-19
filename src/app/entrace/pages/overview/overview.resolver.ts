import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CampaignService} from '../../campaign.service';
import {CampaignResponse} from './entities/campaignResponse.interface';

@Injectable({
    providedIn: 'root'
})
    export class OverviewResolver implements Resolve<CampaignResponse> {

    constructor(private campaignService: CampaignService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CampaignResponse> {
        return this.campaignService.getCampaigns();
    }

}
