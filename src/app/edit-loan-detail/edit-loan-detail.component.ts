import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoanInformation } from '../Models/LoanInformation';
import { LoanInformationService } from '../services/loan-information.service';

@Component({
  selector: 'app-edit-loan-detail',
  templateUrl: './edit-loan-detail.component.html',
  styleUrls: ['./edit-loan-detail.component.css']
})
export class EditLoanDetailComponent implements OnInit {
  loanInformations: LoanInformation[];
  loanInformation: LoanInformation;
  editLoanDetail: FormGroup;
  loanNumber;
  formattedDate;
  loanEdited: boolean;
  constructor(private loanInformationService: LoanInformationService, private route: ActivatedRoute) { }
  pipe = new DatePipe('en-IST');
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => this.loanNumber = params.get(('loanNumber')));
    this.loanInformations = this.loanInformationService.searchLoanByLoanNumber(this.loanNumber);
    this.formattedDate = new Date(this.loanInformations[0].originationDate).toISOString().substring(0, 10);
    this.editLoanDetail = new FormGroup({
      loanNumber: new FormControl({ value: this.loanInformations[0].loanNumber, disabled: true },
        [Validators.required, Validators.pattern('^[0-9]*$')]),
      loanAmount: new FormControl(this.loanInformations[0].loanAmount, [Validators.required, Validators.pattern('^[0-9]*$')]),
      loanTerm: new FormControl(this.loanInformations[0].loanTerm, [Validators.required, Validators.pattern('^[0-9]*$')]),
      borrowerInformation: new FormGroup({
        firstName: new FormControl(this.loanInformations[0].borrowerInformation.userFirstName, [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        lastName: new FormControl(this.loanInformations[0].borrowerInformation.userLastName,
          [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        mobileNumber: new FormControl(this.loanInformations[0].borrowerInformation.mobileNumber,
          [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')])
      }),
      propertyAddress: new FormGroup({
        addressLine1: new FormControl(this.loanInformations[0].propertyInformation.addressLine1, Validators.required),
        addressLine2: new FormControl(this.loanInformations[0].propertyInformation.addressLine2, Validators.required),
        city: new FormControl(this.loanInformations[0].propertyInformation.city, [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        pincode: new FormControl(this.loanInformations[0].propertyInformation.pincode,
          [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('^[0-9]*$')])
      }),
      loanStatus: new FormControl(this.loanInformations[0].loanStatus, [Validators.required]),
      loanManagementFees: new FormControl(this.loanInformations[0].loanManagementFees,
        [Validators.required, Validators.pattern('^[0-9]*$')]),
      originationDate: new FormControl(this.formattedDate),
      originationAccount: new FormControl(this.loanInformations[0].originationAccount,
        [Validators.required, Validators.pattern('^[0-9]*$')])
    });
  }


  editLoanDetails(editLoanDetail): void {
    this.loanEdited = true;
  }
}
