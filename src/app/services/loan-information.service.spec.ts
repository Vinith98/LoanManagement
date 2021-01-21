import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { LoanInformationService } from './loan-information.service';

describe('LoanInformationService', () => {
    let service: LoanInformationService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(LoanInformationService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('should be called', (done) => {
        service.searchLoan().subscribe((loan) => {
            expect(loan).toBeDefined();
            done();
        });
        const testRequest = httpMock.expectOne('./assets/loanInformations.json');
        expect(testRequest.request.method).toBe('GET');
        testRequest.flush([]);
    });
});
