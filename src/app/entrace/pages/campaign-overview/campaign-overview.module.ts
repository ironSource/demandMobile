import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {CampaignOverviewPage} from './campaign-overview.page';
import {OptimizeModalPageModule} from './optimize-modal/optimize-modal.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        // OptimizeModalPageModule,
        RouterModule.forChild([
            {
                path: '', component: CampaignOverviewPage,
            }
        ])
    ],
    declarations: [CampaignOverviewPage]
})
export class CampaignOverviewModule {
}
