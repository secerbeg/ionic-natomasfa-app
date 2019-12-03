import { Component, ViewEncapsulation } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../fields-popover/fields-popover';

@Component({
  selector: 'page-fields',
  templateUrl: 'fields.html',
  styleUrls: ['./fields.scss'],
})
export class FieldsPage {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController) { }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }
}
