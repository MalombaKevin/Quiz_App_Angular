import { GeneralService } from 'app/services/general.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class UnAuthGuardService implements CanActivate {
  constructor(
      private auth: GeneralService,
      private router: Router
    ) {}

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['quizzes']);
      return false;
    }

    return true;
  }
}