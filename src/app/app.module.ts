import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Camera } from '@ionic-native/camera'
import { SMS } from '@ionic-native/sms'
import { ActorProfilePage} from '../pages/actor-profile/actor-profile'
import { MessagePage } from '../pages/message/message'
import { AgentPage } from '../pages/agent/agent'
import { ResumePage } from '../pages/resume/resume'
import { View1Page } from '../pages/view1/view1'
import { View2Page } from '../pages/view2/view2'
import { AuditionPage } from '../pages/audition/audition'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActorProfilePage,
    ResumePage,
    MessagePage,
    AgentPage,
    View1Page,
    View2Page,
    AuditionPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AuditionPage,
    ActorProfilePage,
    ResumePage,
    MessagePage,
    AgentPage,
    View1Page,
    View2Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    SMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}