import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TemplatePage } from '../template/template'
import { ActorProfilePage } from '../actor-profile/actor-profile'
import { AuditionPage } from '../audition/audition'
/**
 * Generated class for the ResumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resume',
  templateUrl: 'resume.html',
})
export class ResumePage {
  TemplatePage;
  ActorProfilePage;
  AuditionPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.TemplatePage= TemplatePage
    this.ActorProfilePage= ActorProfilePage
    this.AuditionPage= AuditionPage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumePage');
  }

}
