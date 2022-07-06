import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { CookieService } from 'ngx-cookie-service';
<<<<<<< HEAD
import { RegisterComponent } from './authc/register/register.component';
import { AuthGuardService } from './guards/auth-guard.service';
=======
>>>>>>> master
import { AuthService } from './services/auth.service';
import { EndpointsService } from './services/endpoints.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    
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
<<<<<<< HEAD
    AuthGuardService,
=======
>>>>>>> master
    AuthService,
    EndpointsService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
