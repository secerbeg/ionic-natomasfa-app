import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FieldsDetailPage } from './fields-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FieldsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldsDetailPageRoutingModule {}
