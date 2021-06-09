import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'rxjscoldhot',
    loadChildren: () =>
      import('./rxjs-cold-hot/rxjs-cold-hot.module').then(
        (m) => m.RxjsColdHotModule
      ),
  },
  { path: 'cache', loadChildren: () => import('./rxjs-cache/rxjs-cache.module').then(m => m.RxjsCacheModule) },
  { path: 'notification', loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
