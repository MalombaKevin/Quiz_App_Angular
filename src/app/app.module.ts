import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';



import { HttpClientModule } from '@angular/common/http';


import { GlobalService } from './service/global.service';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { CookieService } from 'ngx-cookie-service';
import { RegisterComponent } from './authc/register/register.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { AuthService } from './services/auth.service';
import { EndpointsService } from './services/endpoints.service';


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
 


  providers: [CookieService,
    CookieService,
    AuthGuardService,
    AuthService,
    EndpointsService,
    GlobalService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
