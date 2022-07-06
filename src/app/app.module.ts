import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EndpointsService } from './service/endpoints.service';
import { AuthService } from 'src/app/service/auth.service';
import { UnAuthGuardService } from './guards/unauth-guard.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './authentication/login/login.component';
import { GlobalService } from './service/global.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegisterComponent,
    LoginComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
