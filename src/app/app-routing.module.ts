import { NgModule } from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'register',component:SignupComponent},
  {path:'quizlist',component:QuizComponent,canActivate:[AuthGuardService]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuardService]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]},
  {path:'login',component:LoginComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
