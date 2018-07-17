import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ResumePage } from '../pages/resume/resume'
import { ActorProfilePage } from '../pages/actor-profile/actor-profile'
import { Camera} from '@ionic-native/camera'
import { AuditionPage } from '../pages/audition/audition'
import { TemplatePage } from '../pages/template/template'
import { MessagesPage} from '../pages/messages/messages'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActorProfilePage,
    ResumePage,
    AuditionPage,
    TemplatePage,
    MessagesPage,
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
    MessagesPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}