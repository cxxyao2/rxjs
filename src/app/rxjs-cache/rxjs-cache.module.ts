import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RxjsCacheRoutingModule } from './rxjs-cache-routing.module';
import { RxjsCacheComponent } from './rxjs-cache.component';

@NgModule({
  declarations: [RxjsCacheComponent],
  imports: [CommonModule, HttpClientModule, RxjsCacheRoutingModule],
})
export class RxjsCacheModule {}
