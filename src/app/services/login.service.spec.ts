import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be called', (done) => {
    service.getUser().subscribe((user) => {
      expect(user).toBeDefined();
      done();
    });
    const testRequest = httpMock.expectOne('./assets/usersData.json');
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush([{ userId: 123, userPassword: 'vin', userRole: 'admin' }, { userId: 456, userPassword: 'var', userRole: 'user' }]);
  });
});
