import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { UserAuthenticationService } from '../services/user-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: number;
  password: string;
  role: string;
  loginForm: NgForm;
  constructor(private loginService: LoginService, private userAuthService: UserAuthenticationService) { }

  ngOnInit(): void {
  }

  login(loginForm): void {
    this.userAuthService.login(loginForm);
  }
}
