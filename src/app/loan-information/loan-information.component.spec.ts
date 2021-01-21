import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanInformationService } from '../services/loan-information.service';
import { LoanInformationComponent } from './loan-information.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoanInformationComponent', () => {
  let component: LoanInformationComponent;
  let service: LoanInformationService;
  let fixture: ComponentFixture<LoanInformationComponent>;
  let searchByFnameSpy: jasmine.Spy;
  let searchByLnameSpy: jasmine.Spy;
  let searchByLnumberSpy: jasmine.Spy;
  let loanNumber: number;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [LoanInformationComponent],
      providers: [LoanInformationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanInformationComponent);
    service = TestBed.inject(LoanInformationService);
    component = fixture.componentInstance;
    loanNumber = 12345678;
    searchByFnameSpy = spyOn(service, 'searchLoanByFirstName');
    searchByLnameSpy = spyOn(service, 'searchLoanByLastName');
    searchByLnumberSpy = spyOn(service, 'searchLoanByLoanNumber');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call the function searchLoanByFirstName() ', () => {
    component.searchLoanByFirstName();
    expect(searchByFnameSpy).toHaveBeenCalled();
  });
  it('should call the function searchLoanByLastName() ', () => {
    component.searchLoanByLastName();
    expect(searchByLnameSpy).toHaveBeenCalled();
  });
  it('should call the function searchLoanByLoanNumber() ', () => {
    component.searchLoanByLoanNumber();
    expect(searchByLnumberSpy).toHaveBeenCalled();
  });
  it('should call the function editLoan() ', () => {
    component.editLoan(loanNumber);
    expect(component.editLoan).toBeTruthy();
  });
});
