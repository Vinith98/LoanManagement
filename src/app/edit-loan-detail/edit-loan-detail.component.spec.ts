import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanInformationService } from '../services/loan-information.service';
import { EditLoanDetailComponent } from './edit-loan-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('EditLoanDetailComponent', () => {
  let component: EditLoanDetailComponent;
  let service: LoanInformationService;
  let fixture: ComponentFixture<EditLoanDetailComponent>;
  let editSpy: jasmine.Spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [EditLoanDetailComponent],
      providers: [
        { provide: LoanInformationService, useClass: LoanInformationService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLoanDetailComponent);
    service = TestBed.inject(LoanInformationService);
    editSpy = spyOn(service, 'searchLoanByLoanNumber');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be called', () => {
    component.editLoanDetails(component.editLoanDetail.value);
    expect(editSpy).toHaveBeenCalled();

  });
});
