import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
	smallList=false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  showSmallList(){
    if(this.smallList==false){
     this.smallList=true;
    }
    else if(this.smallList==true){
     this.smallList=false;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  goTologin(){
  	this.navCtrl.push('LoginPage');
  }

}
