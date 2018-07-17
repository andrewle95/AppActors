import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResumePage } from '../resume/resume';
import { ActorProfilePage } from '../actor-profile/actor-profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pushPage;
  ActorPage;
  ResumePage;
  base64Image = "../../assets/imgs/AppActorsLogo.png";
  constructor(public navCtrl: NavController) {
    this.pushPage= HomePage;
    this.ResumePage= ResumePage;
    this.ActorPage= ActorProfilePage;
  }

}
