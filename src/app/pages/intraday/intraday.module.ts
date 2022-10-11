import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntradayRoutingModule } from './intraday-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { IntradayComponent } from './intraday.component';


@NgModule({
  declarations: [
    IntradayComponent,
  ],
  imports: [
    CommonModule,
    IntradayRoutingModule,
    SharedModule
  ]
})
export class IntradayModule { }
