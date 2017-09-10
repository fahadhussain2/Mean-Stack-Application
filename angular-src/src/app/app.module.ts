import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {router, routes} from './app.router';
import {HashLocationStrategy, LocationStrategy } from '@angular/common';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {environment} from '../environments/environment';

import {AuthGuard} from './guards/auth.guard';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {AuthService} from './services/auth.service';
import {HutsService} from './services/huts.service';
import {FlashMessagesModule} from 'angular2-flash-messages';


import { AppComponent } from './app.component';
import { AddhutsComponent } from './components/addhuts/addhuts.component';
import { BookedhutsComponent } from './components/bookedhuts/bookedhuts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GooglemapComponent } from './components/googlemap/googlemap.component';
import { HomeComponent } from './components/home/home.component';
import { HutdetailsComponent } from './components/hutdetails/hutdetails.component';
import { LoginComponent } from './components/login/login.component';
import { MyhutsComponent } from './components/myhuts/myhuts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    AddhutsComponent,
    BookedhutsComponent,
    DashboardComponent,
    GooglemapComponent,
    HomeComponent,
    HutdetailsComponent,
    LoginComponent,
    MyhutsComponent,
    NavbarComponent,
    RegisterComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router,
    ReactiveFormsModule,
    FlashMessagesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDexhSSI1G2t2T1uik9XzOWXEi8bhqVPJ4'
    }),
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}, AuthService, AuthGuard, HutsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
