import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntradayComponent } from './intraday.component';

const routes: Routes = [{
  path: '',
  component: IntradayComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntradayRoutingModule { }
