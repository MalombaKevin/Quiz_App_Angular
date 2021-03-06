import { GeneralService } from '../services/general.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable()
export class UnAuthGuardService implements CanActivate {
  constructor(
      private gen: GeneralService,
      private router: Router
    ) {}

  canActivate(): boolean {
    if (this.gen.isAuthenticated()) {
      this.router.navigate(['home']);
      return false;
    }

    return true;
  }
}