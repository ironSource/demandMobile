import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'entrace', pathMatch: 'full'},
  {
    path: 'entrace',
    loadChildren: './entrace/entrace.module#EntracePageModule',
    canActivate: [AuthGuard]
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'entrace', loadChildren: './entrace/entrace.module#EntracePageModule' },
  { path: 'back-office', loadChildren: './entrace/pages/back-office/back-office.module#BackOfficePageModule' },
  { path: 'notifications', loadChildren: './entrace/pages/notifications/notifications.module#NotificationsPageModule' },
  { path: 'login-as', loadChildren: './entrace/pages/login-as/login-as.module#LoginAsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
