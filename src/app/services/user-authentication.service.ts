import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/User';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  users: User[];
  role: string;
  isLoggedIn: boolean;
  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.getUser().subscribe((data) => this.users = data);
  }

  login(loginForm): void {
    this.users.forEach((user) => {
      if (user.userId === loginForm.value.userId && user.userPassword === loginForm.value.password) {
        this.role = user.userRole;
        this.isLoggedIn = true;
        this.router.navigate(['loan', this.role]);
      }
    });
  }
  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['logout']);
  }
}
