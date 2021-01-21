import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from './login.service';

import { UserAuthenticationService } from './user-authentication.service';

describe('UserAuthenticationService', () => {
  let service: UserAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [LoginService]
    });
    service = TestBed.inject(UserAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be called', () => {
    expect(service.login).toBeTruthy();
  });
  it('should be called', () => {
    expect(service.logout).toBeTruthy();
  });
  it('should be verified', () => {
    service.logout();
    expect(service.isLoggedIn).toEqual(false);
  });
});
