import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EndpointsService } from './service/endpoints.service';
import { AuthService } from 'src/app/service/auth.service';
import { UnAuthGuardService } from './guards/unauth-guard.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthComponent } from './auth/.component';

import { HttpClientModule } from '@angular/common/http';


import { GlobalService } from './service/global.service';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    SignupComponent,
    ProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CookieService,
    AuthGuardService,
    UnAuthGuardService,
    AuthService,
    EndpointsService,
    GlobalService,
  ],


  providers: [CookieService],

  bootstrap: [AppComponent]
})
export class AppModule { }
