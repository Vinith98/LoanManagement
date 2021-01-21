import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-new-loan',
  templateUrl: './add-new-loan.component.html',
  styleUrls: ['./add-new-loan.component.css']
})
export class AddNewLoanComponent implements OnInit {
  loanAdded = false;
  addLoanDetail: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.addLoanDetail = new FormGroup({
      loanNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      loanAmount: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      loanTerm: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      borrowerInformation: new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        mobileNumber: new FormControl('',
          [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')])
      }),
      propertyAddress: new FormGroup({
        addressLine1: new FormControl('', Validators.required),
        addressLine2: new FormControl('', Validators.required),
        city: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        pincode: new FormControl('',
          [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('^[0-9]*$')])
      }),
      loanStatus: new FormControl('', [Validators.required]),
      loanManagementFees: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      originationDate: new FormControl(''),
      originationAccount: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')])
    });
  }

  addLoanDetails(addLoanDetail: FormGroup): void {
    console.log(addLoanDetail.value);
    this.loanAdded = true;
  }
}



