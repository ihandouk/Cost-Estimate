import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseAmountListComponent } from './expense-amount-list.component';

describe('ExpenseAmountListComponent', () => {
  let component: ExpenseAmountListComponent;
  let fixture: ComponentFixture<ExpenseAmountListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseAmountListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseAmountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
