import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from '../Models/Loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  loanPath = './assets/loan.json';
  loans: Loan[];
  constructor(private http: HttpClient) {
  }
  getAllLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.loanPath);
  }
}
