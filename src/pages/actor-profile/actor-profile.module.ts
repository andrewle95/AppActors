import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActorProfilePage } from './actor-profile';

@NgModule({
  declarations: [
    ActorProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ActorProfilePage),
  ],
})
export class ActorProfilePageModule {}
