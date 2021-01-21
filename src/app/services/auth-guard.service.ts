import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { UserAuthenticationService } from './user-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private userAuthService: UserAuthenticationService, private router: Router) { }
  canActivate(): boolean {
    return Observable.create((observer: Observer<boolean>) => {
      if (this.userAuthService.isLoggedIn) {
        observer.next(true);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
