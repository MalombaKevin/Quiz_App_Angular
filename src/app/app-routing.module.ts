import { NgModule } from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { QuizComponent } from './quiz/quiz.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { UnAuthGuardService } from './guards/unauth-guard.services';
import { QuizDetailComponent } from './quiz/quiz-detail/quiz-detail/quiz-detail.component';
import { QuizResultComponent } from './quiz/quiz-result/quiz-result.component';
 import { AddQuizComponent } from './quiz/add-quiz/add-quiz.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]},
  {path:'login',component:LoginComponent,},
  {path:'quizlist',component:QuizComponent,canActivate:[AuthGuardService],},
  {path:'quizlist/:slug',component:QuizDetailComponent,canActivate:[AuthGuardService]},
  {path: 'quizresult/:slug/result',component:QuizResultComponent,canActivate:[AuthGuardService]},
  {path:'addquiz',component:AddQuizComponent,canActivate:[AuthGuardService]}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
