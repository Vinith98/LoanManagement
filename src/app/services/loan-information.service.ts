import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoanInformation } from '../Models/LoanInformation';

@Injectable({
  providedIn: 'root'
})


export class LoanInformationService {
  loanInformationsPath = './assets/loanInformations.json';
  loanInformation: LoanInformation[];
  loanInformations: LoanInformation[];



  constructor(private httpService: HttpClient) {
    this.searchLoan().subscribe((data) => this.loanInformation = data);
  }
  searchLoan(): Observable<LoanInformation[]> {
    return this.httpService.get<LoanInformation[]>(this.loanInformationsPath);
  }

  searchLoanByFirstName(searchByFirstName: string): LoanInformation[] {
    this.loanInformations = this.loanInformation.filter((loan) => loan.borrowerInformation.userFirstName === searchByFirstName);
    return this.loanInformations;
  }
  searchLoanByLastName(searchByLastName: string): LoanInformation[] {
    this.loanInformations = this.loanInformation.filter((loan) => loan.borrowerInformation.userLastName === searchByLastName);
    return this.loanInformations;
  }
  searchLoanByLoanNumber(searchByLoanNumber: number): LoanInformation[] {
    this.loanInformations = this.loanInformation.filter((loan) => loan.loanNumber == searchByLoanNumber);
    return this.loanInformations;
  }
}
