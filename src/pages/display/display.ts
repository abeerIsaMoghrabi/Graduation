import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {
  name: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  //  this.loadScript1() ;
    this.name = navParams.get('data');
    //alert(""+this.name);
    this.loadScript2(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPage');
  }
   //  loadScript1 () { var script = document.createElement('script');
   // script.type = 'text/javascript'; 
   // script.src = 'assets/js/craftyGame.js'; 
   // document.body.appendChild(script); };
     loadScript2 () { var script = document.createElement('script');
   script.type = 'text/javascript'; 
   script.src = 'assets/js/displayPage.js'; 
   document.body.appendChild(script); };


}
