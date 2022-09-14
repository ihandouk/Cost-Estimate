import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddExpenseFormComponent } from './add-expense-form/add-expense-form.component';
import { ExpenseAmountListComponent } from './expense-amount-list/expense-amount-list.component';
import { ExpenseItemComponent } from './expense-amount-list/expense-item/expense-item.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';

import {MatDialogModule} from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddExpenseFormComponent,
    ExpenseAmountListComponent,
    ExpenseItemComponent,
    EditExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [],
  entryComponents: [EditExpenseComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
