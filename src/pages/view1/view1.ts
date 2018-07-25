import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

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

  sendMessage(){
    this.sms.send('13106177525', '');
  }

}
