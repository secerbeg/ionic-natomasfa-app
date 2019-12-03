import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FieldsDetailPageRoutingModule } from './fields-detail-routing.module';

import { FieldsDetailPage } from './fields-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FieldsDetailPageRoutingModule
  ],
  declarations: [FieldsDetailPage]
})
export class FieldsDetailPageModule {}
