import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pivotlevel',
    loadChildren: () => import('./pages/pivotlevel/pivotlevel.module').then((m) => m.PivotlevelModule),
  },
  {
    path: 'volume-calculator',
    loadChildren: () => import('./pages/volume-calculator/volume-calculator.module').then((m) => m.VolumeCalculatorModule),
  },
  {
    path: 'volume-scanner',
    loadChildren: () => import('./pages/volume-scanner/volume-scanner.module').then((m) => m.VolumeScannerModule),
  },
  {
    path: 'order-dashboard',
    loadChildren: () => import('./pages/order-dashboard/order-dashboard.module').then((m) => m.OrderDashboardModule),
  },
  {
    path: 'intraday',
    loadChildren: () => import('./pages/intraday/intraday.module').then((m) => m.IntradayModule),
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
