import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {EntracePage} from './entrace.page';
import {IsAdvertiserGuard} from '../guards/is-advertiser.guard';
import {CampaignOverviewResolver} from './pages/campaign-overview/campaign-overview.resolver';
import {OverviewResolver} from './pages/overview/overview.resolver';
import {IsAdminGuard} from '../guards/is-admin.guard';


const routes: Routes = [
    {
        path: '',
        component: EntracePage,
        children: [
            {path: '', redirectTo: 'overview', pathMatch: 'full'},
            {
                path: 'overview',
                loadChildren: './pages/overview/overview.module#OverviewModule',
                canActivate: [IsAdvertiserGuard],
                resolve: { campaigns: OverviewResolver }
            },
            {path: 'back-office', loadChildren: './pages/back-office/back-office.module#BackOfficePageModule', canActivate: [IsAdminGuard]},
            {path: 'notifications', loadChildren: './pages/notifications/notifications.module#NotificationsPageModule'},
            {path: 'login-as', loadChildren: './pages/login-as/login-as.module#LoginAsPageModule', canActivate: [IsAdminGuard]},
            {
                path: 'campaign/:id',
                loadChildren: './pages/campaign-overview/campaign-overview.module#CampaignOverviewModule',
                canActivate: [IsAdvertiserGuard],
                resolve: { campaign: CampaignOverviewResolver }
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [EntracePage]
})
export class EntracePageModule {
}
