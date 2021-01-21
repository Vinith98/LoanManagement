import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddNewLoanComponent } from './add-new-loan/add-new-loan.component';
import { LoanComponent } from './loan/loan.component';
import { EditLoanDetailComponent } from './edit-loan-detail/edit-loan-detail.component';
import { LoanInformationComponent } from './loan-information/loan-information.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'addNewLoan', component: AddNewLoanComponent, canActivate: [AuthGuardService] },
  { path: 'loanDetails/:role', component: LoanInformationComponent, canActivate: [AuthGuardService] },
  { path: 'loan/:role', component: LoanComponent, canActivate: [AuthGuardService] },
  { path: 'editLoanDetail/:loanNumber', component: EditLoanDetailComponent, canActivate: [AuthGuardService] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
