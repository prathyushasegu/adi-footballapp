import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LeagueDashboardComponent } from './components/league-dashboard/league-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { FixturesDetailsComponent } from './components/fixtures-details/fixtures-details.component';
import { LinkRenderComponent } from './components/link-render/link-render.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeagueDashboardComponent,
    FixturesDetailsComponent,
    LinkRenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgGridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
