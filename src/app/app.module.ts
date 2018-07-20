import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ResumePage } from '../pages/resume/resume'
import { ActorProfilePage } from '../pages/actor-profile/actor-profile'
import { Camera } from '@ionic-native/camera'
import { AuditionPage } from '../pages/audition/audition'
import { TemplatePage } from '../pages/template/template'
import { MessagePage } from '../pages/message/message'
import { InterestPage } from '../pages/interest/interest'
import { DramaPage } from '../pages/drama/drama'
import { ComedyPage } from '../pages/comedy/comedy'
import { RomancePage } from '../pages/romance/romance';
import { HorrorPage } from '../pages/horror/horror';
import { AgentPage } from '../pages/agent/agent'
import { SMS } from '@ionic-native/sms'
import { View1Page } from '../pages/view1/view1'
import { View2Page } from '../pages/view2/view2'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActorProfilePage,
    ResumePage,
    AuditionPage,
    TemplatePage,
    MessagePage,
    InterestPage,
    DramaPage,
    ComedyPage,
    RomancePage,
    HorrorPage,
    AgentPage,
    View1Page,
    View2Page,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActorProfilePage,
    ResumePage,
    AuditionPage,
    TemplatePage,
    MessagePage,

    InterestPage,
    DramaPage,
    ComedyPage,
    RomancePage,
    HorrorPage,
    AgentPage,
    View1Page,
    View2Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}