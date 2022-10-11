import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolumeCalculatorComponent } from './volume-calculator.component';

const routes: Routes = [
  {
    path: '',
    component: VolumeCalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolumeCalculatorRoutingModule { }
