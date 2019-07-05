import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HyunjinComponent } from './hyunjin/hyunjin.component';
import { SooyoungComponent } from './sooyoung/sooyoung.component';
import { SubinComponent } from './subin/subin.component';

@NgModule({
  declarations: [
    AppComponent,
    HyunjinComponent,
    SooyoungComponent,
    SubinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
