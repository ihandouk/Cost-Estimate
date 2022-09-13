import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EstimatorItem } from 'src/Shared/models/item-estimator.model';
import { EditExpenseComponent } from '../edit-expense/edit-expense.component';

@Component({
  selector: 'app-expense-amount-list',
  templateUrl: './expense-amount-list.component.html',
  styleUrls: ['./expense-amount-list.component.scss']
})
export class ExpenseAmountListComponent implements OnInit {

  @Input() estimateItem: EstimatorItem[];
  @Output() delete: EventEmitter<EstimatorItem> = new EventEmitter<EstimatorItem>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onDelete(item: EstimatorItem){
    this.delete.emit(item);
  }

  onItemClicked(item: EstimatorItem){
    const dialogRef = this.dialog.open(EditExpenseComponent, {
      width: '580px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.estimateItem[this.estimateItem.indexOf(item)]=result;
      }
    })
  }
}
