import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsCacheComponent } from './rxjs-cache.component';

const routes: Routes = [{ path: '', component: RxjsCacheComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsCacheRoutingModule { }
