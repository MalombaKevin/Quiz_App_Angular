import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { GeneralService } from 'app/services/general.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
      private auth: GeneralService,
      private router: Router
    ) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated() ){
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}