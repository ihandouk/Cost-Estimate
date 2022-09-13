import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EstimatorItem } from 'src/Shared/models/item-estimator.model';

@Component({
  selector: 'app-add-expense-form',
  templateUrl: './add-expense-form.component.html',
  styleUrls: ['./add-expense-form.component.scss']
})
export class AddExpenseFormComponent implements OnInit {

  @Input() item: EstimatorItem;
  @Output() formSubmit: EventEmitter<EstimatorItem> = new EventEmitter<EstimatorItem>();

  isNewExpense: boolean;
  constructor() { }

  ngOnInit(): void {
    if(this.item){
      this.isNewExpense = false;
    }
    else{
      this.isNewExpense = true;
      this.item = new EstimatorItem('', null);
    }
  }

  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
