import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {IonicModule} from '@ionic/angular';

import { OptimizeModalPage } from './optimize-modal.page';

const routes: Routes = [
  {
    path: '',
    component: OptimizeModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OptimizeModalPage],
  entryComponents: [OptimizeModalPage]
})
export class OptimizeModalPageModule {}
