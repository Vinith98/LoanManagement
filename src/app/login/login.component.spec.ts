import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockLoginService } from './MockLoginService';
import { MockAuthService } from './MockAuthService';
import { LoginService } from '../services/login.service';
import { LoginComponent } from './login.component';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserAuthenticationService } from '../services/user-authentication.service';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginSpy: jasmine.Spy;
  let userAuthSpy: jasmine.Spy;
  let loginService: LoginService;
  let authservice: UserAuthenticationService;
  let login: NgForm;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [LoginComponent],
      providers: [
        { provide: LoginService, useClass: MockLoginService },
        { provide: UserAuthenticationService, useClass: MockAuthService }
      ]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    loginService = TestBed.inject(LoginService);
    authservice = TestBed.inject(UserAuthenticationService);
    loginSpy = spyOn(loginService, 'getUser');
    userAuthSpy = spyOn(authservice, 'login');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ', () => {
    component.login(login);
    expect(userAuthSpy).toHaveBeenCalled();
  });
});
