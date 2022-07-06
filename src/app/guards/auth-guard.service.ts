import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
      private auth: AuthService,
      private router: Router
    ) {}

  canActivate(): boolean {
    if (!this.auth['isLoggedIn']()) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }
}