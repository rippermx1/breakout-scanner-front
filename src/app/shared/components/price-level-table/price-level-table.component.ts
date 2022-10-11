import { Component, Input, OnInit } from '@angular/core';
import { ILevel, LEVEL_TYPE } from 'src/app/interfaces/pivotlevel/ILevel';

@Component({
  selector: 'app-price-level-table',
  templateUrl: './price-level-table.component.html',
  styleUrls: ['./price-level-table.component.less']
})
export class PriceLevelTableComponent implements OnInit {
  @Input() levels: ILevel[] = [];
  @Input() type: string = "";
  classItem: string = "";
  
  constructor() { }

  ngOnInit(): void {   
    this.classItem = this.type.includes(LEVEL_TYPE.support) ? "list-group-item list-group-item-success" : "list-group-item list-group-item-danger";
  }

  

}
