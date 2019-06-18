import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {EntracePage} from './entrace.page';
import {IsAdvertiserGuard} from '../guards/is-advertiser.guard';
import {IsAaminGuard} from '../guards/is-admin.guard';


const routes: Routes = [
  {
    path: '',
    component: EntracePage,
    children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {
        path: 'overview',
        loadChildren: './pages/overview/overview.module#OverviewModule',
        canActivate: [IsAdvertiserGuard]
      },
      {path: 'back-office', loadChildren: './pages/back-office/back-office.module#BackOfficePageModule', canActivate: [IsAaminGuard]},
      {path: 'notifications', loadChildren: './pages/notifications/notifications.module#NotificationsPageModule'},
      {path: 'login-as', loadChildren: './pages/login-as/login-as.module#LoginAsPageModule', canActivate: [IsAaminGuard]}
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
export class EntracePageModule {}
