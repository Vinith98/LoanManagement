import { Component, Input, OnInit } from '@angular/core';
import { LoanInformationService } from '../services/loan-information.service';
import { LoanInformation } from '../Models/LoanInformation';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-loan-information',
  templateUrl: './loan-information.component.html',
  styleUrls: ['./loan-information.component.css']
})
export class LoanInformationComponent implements OnInit {

  constructor(private loanInformationService: LoanInformationService, private route: ActivatedRoute, private router: Router) { }
  loanInfo: LoanInformation[] = [];
  loanInformations: any;
  searchByFirstName = '';
  searchByLastName = '';
  searchByLoanNumber: number;
  role: string;
  date: Date;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) => { this.role = params.get('role'); });
  }

  searchLoanByFirstName(): void {
    this.loanInformations = this.loanInformationService.searchLoanByFirstName(this.searchByFirstName);
  }
  searchLoanByLastName(): void {
    this.loanInformations = this.loanInformationService.searchLoanByLastName(this.searchByLastName);
  }
  searchLoanByLoanNumber(): void {
    this.loanInformations = this.loanInformationService.searchLoanByLoanNumber(this.searchByLoanNumber);
  }
  editLoan(loanNumber: number): void {
    this.router.navigate(['editLoanDetail', loanNumber]);
  }
}
