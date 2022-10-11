import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PriceLevelTableComponent } from './components/price-level-table/price-level-table.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { PivotAlertComponent } from './components/alerts/pivot-alert/pivot-alert.component';
import { ChartComponent } from './components/chart/chart.component';
import { VolumeAtTimeComponent } from './components/volume-at-time/volume-at-time.component';
import { VolumeAlertComponent } from './components/alerts/volume-alert/volume-alert.component';


@NgModule({
  declarations: [
    PriceLevelTableComponent,
    AutocompleteComponent,
    PivotAlertComponent,
    ChartComponent,
    VolumeAtTimeComponent,
    VolumeAlertComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AlertModule
  ],
  exports: [ 
    PriceLevelTableComponent, 
    AlertModule, 
    AutocompleteComponent, 
    PivotAlertComponent,
    ChartComponent,
    VolumeAtTimeComponent,
    VolumeAlertComponent
  ]
})
export class SharedModule { }
