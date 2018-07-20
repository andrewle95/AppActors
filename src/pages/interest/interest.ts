import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DramaPage } from '../drama/drama'
import { ComedyPage } from '../comedy/comedy'
import { HorrorPage } from '../horror/horror'
import { RomancePage } from '../romance/romance'
/**
 * Generated class for the InterestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interest',
  templateUrl: 'interest.html',
})
export class InterestPage {
  HorrorPage;
  ComedyPage;
  DramaPage;
  RomancePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.DramaPage= DramaPage
    this.ComedyPage= ComedyPage
    this.HorrorPage= HorrorPage
    this.RomancePage= RomancePage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InterestPage');
  }

}
