import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule, ModalController} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {CampaignOverviewPage} from './campaign-overview.page';
import {OptimizeModalPage} from './optimize-modal/optimize-modal.page';
import {EditBudgetModalPage} from './edit-budget-modal/edit-budget-modal.page';

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
    providers: [ModalController],
    declarations: [CampaignOverviewPage, OptimizeModalPage, EditBudgetModalPage],
    entryComponents: [OptimizeModalPage, EditBudgetModalPage]
})
export class CampaignOverviewModule {
}
