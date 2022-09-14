import { Component, OnInit } from '@angular/core';
import { EstimatorItem } from 'src/Shared/models/item-estimator.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  estimateItem: EstimatorItem[] = new Array<EstimatorItem>();
  totalEstimate: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: EstimatorItem){
    this.estimateItem.push(newItem);
    this.totalEstimate += newItem.amount;
  }

  deleteItem(item: EstimatorItem){
    let index = this.estimateItem.indexOf(item);
    this.estimateItem.splice(index, 1);
    this.totalEstimate -= item.amount;
  }

  addTab(tabs) {
    this.tabs.push('New');
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}
