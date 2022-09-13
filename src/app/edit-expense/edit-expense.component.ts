import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EstimatorItem } from 'src/Shared/models/item-estimator.model';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.scss']
})
export class EditExpenseComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditExpenseComponent>,
    @Inject(MAT_DIALOG_DATA) public item: EstimatorItem
  ) { }

  ngOnInit(): void {
  }

  onSubmitted(updateItem: EstimatorItem){
    this.dialogRef.close(updateItem);
  }

}
