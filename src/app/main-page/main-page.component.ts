import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { EstimatorItem } from 'src/Shared/models/item-estimator.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
