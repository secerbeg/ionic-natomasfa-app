import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FieldsPage } from './fields';

const routes: Routes = [
  {
    path: '',
    component: FieldsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldsPageRoutingModule { }
