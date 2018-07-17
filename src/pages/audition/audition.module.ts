import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuditionPage } from './audition';

@NgModule({
  declarations: [
    AuditionPage,
  ],
  imports: [
    IonicPageModule.forChild(AuditionPage),
  ],
})
export class AuditionPageModule {}
