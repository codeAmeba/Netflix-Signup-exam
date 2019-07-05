import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubinComponent } from './subin/subin.component';
import { HyunjinComponent } from './hyunjin/hyunjin.component';
import { SooyoungComponent } from './sooyoung/sooyoung.component';

const routes: Routes = [
  { path: '', redirectTo: '/subin', pathMatch: 'full' },
  { path: 'subin', component: SubinComponent },
  { path: 'hyunjin', component: HyunjinComponent },
  { path: 'sooyoung', component: SooyoungComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
