import { Component, OnInit } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { Loan } from '../Models/Loan';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  loans: Loan[];
  role: string;


  constructor(private loanService: LoanService, private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.role = params.get('role');
    });
    this.loanService.getAllLoans().subscribe((data) => {
      this.loans = data;
    });
  }

  ngOnInit(): void {
  }
}
