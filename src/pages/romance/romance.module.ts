import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RomancePage } from './romance';

@NgModule({
  declarations: [
    RomancePage,
  ],
  imports: [
    IonicPageModule.forChild(RomancePage),
  ],
})
export class RomancePageModule {}
