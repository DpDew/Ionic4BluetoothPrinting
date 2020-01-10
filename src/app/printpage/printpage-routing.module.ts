import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrintpagePage } from './printpage.page';

const routes: Routes = [
  {
    path: '',
    component: PrintpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintpagePageRoutingModule {}
