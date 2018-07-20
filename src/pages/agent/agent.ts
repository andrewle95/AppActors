import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { View1Page } from '../view1/view1'
import { View2Page } from '../view2/view2'
/**
 * Generated class for the AgentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agent',
  templateUrl: 'agent.html',
})
export class AgentPage {
  View1Page;
  View2Page

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.View1Page= View1Page
    this.View2Page= View2Page
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AgentPage');
  }

}
