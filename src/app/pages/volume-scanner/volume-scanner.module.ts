import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolumeScannerRoutingModule } from './volume-scanner-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { VolumeScannerComponent } from './volume-scanner.component';


@NgModule({
  declarations: [
    VolumeScannerComponent  
  ],
  imports: [
    CommonModule,
    VolumeScannerRoutingModule,
    SharedModule
  ]
})
export class VolumeScannerModule { }
