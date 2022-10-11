import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPivotAlert } from 'src/app/interfaces/pivotlevel/IPivotAlert';

@Component({
  selector: 'app-pivot-alert',
  templateUrl: './pivot-alert.component.html',
  styleUrls: ['./pivot-alert.component.less']
})
export class PivotAlertComponent implements OnInit {
  @Input() alert: IPivotAlert = {} as IPivotAlert;
  @Output() alertSelectedEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  alertSelected(alert: IPivotAlert) {
    this.alertSelectedEvent.emit(JSON.stringify(alert));
  }

}
