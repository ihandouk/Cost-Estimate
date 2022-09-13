import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EstimatorItem } from 'src/Shared/models/item-estimator.model';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.scss']
})
export class ExpenseItemComponent implements OnInit {

  @Input() item: EstimatorItem;
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onXButtonClick(){
    this.xButtonClick.emit();
  }

  onItemClick(){
    this.itemClick.emit();
  }

}
