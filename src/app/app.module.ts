import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AddNewLoanComponent } from './add-new-loan/add-new-loan.component';
import { LoanComponent } from './loan/loan.component';
import { LoanInformationComponent } from './loan-information/loan-information.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditLoanDetailComponent } from './edit-loan-detail/edit-loan-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AddNewLoanComponent,
    LoanComponent,
    LoanInformationComponent,
    PageNotFoundComponent,
    EditLoanDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
