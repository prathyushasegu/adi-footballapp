import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueDashboardComponent } from './components/league-dashboard/league-dashboard.component';
import { FixturesDetailsComponent } from './components/fixtures-details/fixtures-details.component';

const routes: Routes = [
  {path: '', component:LeagueDashboardComponent},
  { path: 'league/:teamId' , component: LeagueDashboardComponent },
  { path: 'teams/:teamId', component: FixturesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
