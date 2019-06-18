import {Campaign} from './campaign.interface';

export interface CampaignResponse {
    campaigns: Campaign[];
    totalResultsCount: number;
}
