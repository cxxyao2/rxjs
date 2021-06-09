import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RxjsColdHotComponent } from './rxjs-cold-hot.component';
import { HotObservableComponent } from './hot-observable.component';
import { ButtonClickComponent } from './button-click/button-click.component';
import { ExComponent } from './ex/ex.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsColdHotComponent,
    children: [{ path: 'button', component: ButtonClickComponent }],
  },
];

@NgModule({
  declarations: [
    RxjsColdHotComponent,
    HotObservableComponent,
    ButtonClickComponent,
    ExComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class RxjsColdHotModule {}
