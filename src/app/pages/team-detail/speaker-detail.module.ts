import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeakerDetailPage } from './team-detail';
import { SpeakerDetailPageRoutingModule } from './team-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SpeakerDetailPageRoutingModule
  ],
  declarations: [
    SpeakerDetailPage,
  ]
})
export class SpeakerDetailModule { }
