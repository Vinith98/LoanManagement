import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoanService } from '../services/loan.service';
import { MockingLoanService } from './MockingLoanService';
import { LoanComponent } from './loan.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('LoanComponent', () => {
    let component: LoanComponent;
    let service: LoanService;
    const loanType = 'Bike';
    let fixture: ComponentFixture<LoanComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            declarations: [LoanComponent],
            providers: [
                { provides: LoanService, useClass: MockingLoanService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoanComponent);
        service = TestBed.inject(LoanService);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
