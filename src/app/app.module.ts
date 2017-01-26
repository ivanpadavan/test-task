import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/modal';

import { AppComponent } from './app.component';
import {MapService} from "./services/map.service";
import {ApiService} from "./services/api.service";
import { UserBadgeComponent } from './components/user-badge/user-badge.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { UsersComponent } from './components/users/users.component';
import {Routes, RouterModule} from "@angular/router";
import { StatsComponent } from './components/stats/stats.component';
import {ChartsModule} from "ng2-charts";

const appRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'stats', component: StatsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserBadgeComponent,
    CapitalizePipe,
    KeysPipe,
    UsersComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    ModalModule.forRoot(),
    ChartsModule

  ],
  providers: [MapService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
