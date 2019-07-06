import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HyunjinComponent } from './hyunjin/hyunjin.component';
import { SooyoungComponent } from './sooyoung/sooyoung.component';
import { SubinComponent } from './subin/subin.component';
import { SignupHeaderComponent } from './subin/signup-header/signup-header.component';
import { SignUpComponent } from './subin/sign-up/sign-up.component';
import { SignInComponent } from './subin/sign-in/sign-in.component';
import { SignupFooterComponent } from './subin/signup-footer/signup-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HyunjinComponent,
    SooyoungComponent,
    SubinComponent,
    SignupHeaderComponent,
    SignUpComponent,
    SignInComponent,
    SignupFooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
