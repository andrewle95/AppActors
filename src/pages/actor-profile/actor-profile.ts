import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ResumePage } from '../resume/resume';
import { AuditionPage }from '../audition/audition';
import { AgentPage } from '../agent/agent'




/**
 * Generated class for the ActorProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actor-profile',
  templateUrl: 'actor-profile.html',
})
export class ActorProfilePage {
    ResumePage;
    AuditionPage;
    Message;
    AgentPage;


    options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE

  }
  base64Image = "../assets/imgs/blank-profile-circle.png";
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
    this.ResumePage = ResumePage;
    this.AuditionPage= AuditionPage;
    this.AgentPage= AgentPage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActorProfilePage');
  }
  takePhoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
       this.base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }

}

