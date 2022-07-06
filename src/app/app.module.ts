import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { EndpointsService } from './service/endpoints.service';
import { AuthService } from 'src/app/service/auth.service';


=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> michael
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

    AuthService,
    EndpointsService,
    GlobalService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
