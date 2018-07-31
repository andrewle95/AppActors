import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { View2Page } from '../view2/view2';

/**
 * Generated class for the View1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view1',
  templateUrl: 'view1.html',
})

export class View1Page {
  base64Image = "../../assets/imgs/Android-Messages.png";
  constructor(public navCtrl: NavController, public navParams: NavParams, private sms:SMS) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad View1Page');
  }

  sendSMS(){
    this.sms.send('+1-213-139-8945', '');
  }

  viewResume(){
    this.navCtrl.push(View2Page);
  }
}
