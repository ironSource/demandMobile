import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

import { NotificationsPage } from './notifications.page';
import {AddNotificationbComponent} from './add-notificationb/add-notificationb.component';

const routes: Routes = [
  {
    path: '',
    component: NotificationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NotificationsPage, AddNotificationbComponent],
  providers: [ModalController],
  entryComponents: [AddNotificationbComponent]
})
export class NotificationsPageModule {}
