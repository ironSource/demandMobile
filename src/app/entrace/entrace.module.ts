import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EntracePage } from './entrace.page';


const routes: Routes = [
  {
    path: '',
    component: EntracePage,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: './pages/home/home.module#HomePageModule'},
      {path: 'list', loadChildren: './pages/list/list.module#ListPageModule'}
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
