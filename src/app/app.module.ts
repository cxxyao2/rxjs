import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './parent-child/child/child.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { DebounceComponent } from '../debounce/debounce.component';
import { ColMediaComponent } from './col-media/col-media.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, ChildComponent, ParentComponent, DebounceComponent, ColMediaComponent],
  imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
