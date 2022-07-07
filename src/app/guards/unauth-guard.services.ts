import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Injectable()
export class UnAuthGuardService implements CanActivate {
  constructor(
      private auth: AuthService,
      private router: Router
    ) {}

  canActivate(): boolean {
    if (this.auth['isLoggedIn']()) {
      this.router.navigate(['quizzes']);
      return false;
    }

    return true;
  }
}