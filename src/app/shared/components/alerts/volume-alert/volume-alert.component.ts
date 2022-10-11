import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-volume-alert',
  templateUrl: './volume-alert.component.html',
  styleUrls: ['./volume-alert.component.less']
})
export class VolumeAlertComponent implements OnInit {
  @Input() alert: any;
  @Output() alertSelectedEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  showDetail(alert: any) {
    console.log(alert);
  }

}
