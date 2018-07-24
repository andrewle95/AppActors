import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { View1Page } from '../view1/view1'
import { ActorProfilePage } from '../actor-profile/actor-profile'

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
  View2Page;
  ActorProfilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.View1Page= View1Page
    this.ActorProfilePage= ActorProfilePage
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AgentPage');
  }

}
