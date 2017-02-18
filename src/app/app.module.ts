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

const appRoutes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'stats', loadChildren: './components/stats/stats.module#StatsModule' },
];

@NgModule({
  declarations: [
    AppComponent,
    UserBadgeComponent,
    CapitalizePipe,
    KeysPipe,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    ModalModule.forRoot()
  ],
  providers: [MapService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
