import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ProgressBarModule} from "angular-progress-bar"
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { CookieService } from 'ngx-cookie-service';

import { QuizComponent } from './quiz/quiz.component';
import { AuthService } from './services/auth.service';
import { EndpointsService } from './services/endpoints.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './auth/logout/logout.component';

import { NavbarComponent } from './navbar/navbar.component';
import { QuizDetailComponent } from './quiz/quiz-detail/quiz-detail/quiz-detail.component';
import { QuestionComponent } from './quiz/quiz-detail/quiz-detail/question/question.component';
import { AnswerComponent } from './quiz/quiz-detail/quiz-detail/question/answer/answer.component';
import { QuizResultComponent } from './quiz/quiz-result/quiz-result.component';
import { AddQuizComponent } from './quiz/add-quiz/add-quiz.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    HomeComponent,
    LogoutComponent,
    QuizComponent,
    NavbarComponent,
    QuizDetailComponent,
    QuestionComponent,
    AnswerComponent,
    QuizResultComponent,
    AddQuizComponent
    
  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ProgressBarModule,
  ],

  providers: [
    CookieService,
    AuthService,
    EndpointsService,
    AuthGuardService,
  ],



  bootstrap: [AppComponent]
})
export class AppModule { }
