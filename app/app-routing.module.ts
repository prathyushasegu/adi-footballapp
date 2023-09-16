import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueDashboardComponent } from './components/league-dashboard/league-dashboard.component';

const routes: Routes = [
  { path: '' , component: LeagueDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
