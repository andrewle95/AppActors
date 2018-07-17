import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActorOrAgentPage } from './actor-or-agent';

@NgModule({
  declarations: [
    ActorOrAgentPage,
  ],
  imports: [
    IonicPageModule.forChild(ActorOrAgentPage),
  ],
})
export class ActorOrAgentPageModule {}
