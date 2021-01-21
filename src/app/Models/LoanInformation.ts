import { BorrowerInformation } from './BorrowerInformation';
import { Property } from './Property';

export interface LoanInformation {
    loanNumber: number;
    loanAmount: number;
    loanTerm: number;
    borrowerInformation: BorrowerInformation;
    propertyInformation: Property;
    loanStatus: string;
    loanManagementFees: number;
    originationDate: Date;
    originationAccount: number;
}

