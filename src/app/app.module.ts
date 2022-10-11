import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PivotlevelModule } from './pages/pivotlevel/pivotlevel.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VolumeCalculatorModule } from './pages/volume-calculator/volume-calculator.module';
import { VolumeScannerModule } from './pages/volume-scanner/volume-scanner.module';
import { OrderDashboardModule } from './pages/order-dashboard/order-dashboard.module';
import { IntradayModule } from './pages/intraday/intraday.module';


@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PivotlevelModule,
    VolumeCalculatorModule,
    VolumeScannerModule,
    OrderDashboardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IntradayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
