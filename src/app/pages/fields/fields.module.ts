import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FieldsPage } from './fields';
import { PopoverPage } from '../fields-popover/fields-popover';
import { FieldsPageRoutingModule } from './fields-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FieldsPageRoutingModule
  ],
  declarations: [FieldsPage, PopoverPage],
  entryComponents: [PopoverPage],
  bootstrap: [FieldsPage],
})
export class FieldsModule {}
