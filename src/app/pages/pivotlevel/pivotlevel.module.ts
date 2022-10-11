import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PivotlevelRoutingModule } from './pivotlevel-routing.module';
import { PivotlevelComponent } from './pivotlevel.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PivotlevelComponent
  ],
  imports: [
    CommonModule,
    PivotlevelRoutingModule,
    SharedModule
  ]
})
export class PivotlevelModule { }
