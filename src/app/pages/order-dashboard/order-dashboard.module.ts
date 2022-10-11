import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderDashboardRoutingModule } from './order-dashboard-routing.module';
import { OrderDashboardComponent } from './order-dashboard.component';


@NgModule({
  declarations: [
    OrderDashboardComponent
  ],
  imports: [
    CommonModule,
    OrderDashboardRoutingModule
  ]
})
export class OrderDashboardModule { }
