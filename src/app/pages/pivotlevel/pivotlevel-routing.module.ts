import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PivotlevelComponent } from './pivotlevel.component';

const routes: Routes = [{ path: '', component: PivotlevelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PivotlevelRoutingModule { }
