import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Campaign} from '../overview/entities/campaign.interface';
import {map} from 'rxjs/operators';
import {CampaignService} from '../../campaign.service';

@Injectable({
    providedIn: 'root'
})
export class CampaignOverviewResolver implements Resolve<Campaign> {

    constructor(private campaignService: CampaignService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Campaign> {
        return this.campaignService.getCampaignById(route.params.id);
    }

}
