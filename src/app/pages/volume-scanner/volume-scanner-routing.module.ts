import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolumeScannerComponent } from './volume-scanner.component';

const routes: Routes = [
  {
    path: ':symbol',
    component: VolumeScannerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolumeScannerRoutingModule { }
