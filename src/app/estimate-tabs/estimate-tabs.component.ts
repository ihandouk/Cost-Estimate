import { Component, OnInit, ViewChild } from '@angular/core';
import { EstimatorItem } from 'src/Shared/models/item-estimator.model';
import { Tab } from 'src/Shared/models/tab';

@Component({
  selector: 'app-estimate-tabs',
  templateUrl: './estimate-tabs.component.html',
  styleUrls: ['./estimate-tabs.component.scss']
})
export class EstimateTabsComponent implements OnInit {

  estimateItem: EstimatorItem[] = new Array<EstimatorItem>();
  totalEstimate: number = 0;

  tabs: Array<Tab> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: EstimatorItem){
    this.estimateItem.push(newItem);
    this.totalEstimate += newItem.amount;
  }

  addTab() {
    let newTab: Tab = new Tab();
    newTab.name = "Tab " + (this.tabs.length + 1);
    this.tabs.push(newTab);
  }

  deleteItem(item: EstimatorItem){
    let index = this.estimateItem.indexOf(item);
    this.estimateItem.splice(index, 1);
    this.totalEstimate -= item.amount;
  }

  removeTab(tab: Tab) {
    var index = this.tabs.indexOf(tab)
    if(index > -1){
      this.tabs.splice(index, 1);
      this.tabs.forEach((tab, index) => tab.name = "Tab " + (index + 1));
    }
    
  }
}
