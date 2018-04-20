import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController  } from 'ionic-angular';
//import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';
import * as firebase from 'firebase/app';

import * as $ from "jquery";
import  'slick-carousel/slick/slick';

/**
 * Generated class for the StudioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export const FIREBASE_CONFIG =
 {
    apiKey: "AIzaSyAwzSQGq1EYiVTEAKlTlNHFtbm1IrZYbtg",
    authDomain: "myapp-b575c.firebaseapp.com",
    databaseURL: "https://myapp-b575c.firebaseio.com",
    projectId: "myapp-b575c",
    storageBucket: "myapp-b575c.appspot.com",
    messagingSenderId: "68982032969"
  };

@IonicPage()
@Component({
  selector: 'page-studio',
  templateUrl: 'studio.html',
})
export class StudioPage {

   // public base64Image: string;
   //  mySelectedPhoto;
   //  loading;
   //  currentPhoto;
    imgSource;
    imgSource2;
    imgSource3;
    imgSource4;
    imgSource5;
    imgSource6;
    imgSource7;
    imgSource8;
    imgSource9;

    imgSource10;
    imgSource11;
    imgSource12;
    imgSource13;
    imgSource14;

    imgSource15;
    imgSource16;
    imgSource17;
    imgSource18;
    imgSource19;

    imgSource20;
    imgSource21;
    imgSource22;
    imgSource23;
    imgSource24;
    imgSource25;
    imgSource26;
    imgSource27;
    imgSource28;
    imgSource29;
    imgSource30;
    imgSource31;
    imgSource32;
    imgSource33;
    imgSource34;
    imgSource35;
    imgSource36;

    imgSource37;
    imgSource38;
    imgSource39;
    imgSource40;
    imgSource41;
    imgSource42;
    imgSource43;
    imgSource44;
    imgSource45;
    imgSource46;
    imgSource47;
     imgSource48;

  constructor( public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

  this.getMyURL();
this.loadScript();
  }

  getMyURL(){
      firebase.storage().ref().child('bg/t1.png').getDownloadURL().then((url)=>{
          this.imgSource = url;
          })

          firebase.storage().ref().child('bg/t2.png').getDownloadURL().then((url)=>{
          this.imgSource2 = url;
          })

          firebase.storage().ref().child('bg/t3.png').getDownloadURL().then((url)=>{
          this.imgSource3 = url;
          })

          firebase.storage().ref().child('bg/t4.png').getDownloadURL().then((url)=>{
          this.imgSource4 = url;
          })

          firebase.storage().ref().child('bg/t5.jpg').getDownloadURL().then((url)=>{
          this.imgSource5 = url;
          })

          firebase.storage().ref().child('bg/t6.png').getDownloadURL().then((url)=>{
          this.imgSource6 = url;
          })

          firebase.storage().ref().child('bg/t7.png').getDownloadURL().then((url)=>{
          this.imgSource7 = url;
          })

          firebase.storage().ref().child('bg/t8.png').getDownloadURL().then((url)=>{
          this.imgSource8 = url;
          })

          firebase.storage().ref().child('bg/t9.png').getDownloadURL().then((url)=>{
          this.imgSource9 = url;
          })

          firebase.storage().ref().child('bg/m1.png').getDownloadURL().then((url)=>{
          this.imgSource10 = url;
          })

          firebase.storage().ref().child('bg/m2.png').getDownloadURL().then((url)=>{
          this.imgSource11 = url;
          })

          firebase.storage().ref().child('bg/m3.png').getDownloadURL().then((url)=>{
          this.imgSource12 = url;
          })

          firebase.storage().ref().child('bg/m4.png').getDownloadURL().then((url)=>{
          this.imgSource13 = url;
          })
          firebase.storage().ref().child('bg/g1.png').getDownloadURL().then((url)=>{
          this.imgSource14 = url;
          })
          firebase.storage().ref().child('bg/g2.png').getDownloadURL().then((url)=>{
          this.imgSource15 = url;
          })
          firebase.storage().ref().child('bg/g3.png').getDownloadURL().then((url)=>{
          this.imgSource16 = url;
          })
          firebase.storage().ref().child('bg/g4.png').getDownloadURL().then((url)=>{
          this.imgSource17 = url;
          })
          firebase.storage().ref().child('bg/g5.png').getDownloadURL().then((url)=>{
          this.imgSource18 = url;
          })
          firebase.storage().ref().child('bg/g6.png').getDownloadURL().then((url)=>{
          this.imgSource19 = url;
          })
          firebase.storage().ref().child('bg/f1.png').getDownloadURL().then((url)=>{
          this.imgSource20 = url;
          })
          firebase.storage().ref().child('bg/f2.png').getDownloadURL().then((url)=>{
          this.imgSource21 = url;
          })
          firebase.storage().ref().child('bg/f3.png').getDownloadURL().then((url)=>{
          this.imgSource22 = url;
          })
          firebase.storage().ref().child('bg/f4.png').getDownloadURL().then((url)=>{
          this.imgSource23 = url;
          })
          firebase.storage().ref().child('bg/f5.png').getDownloadURL().then((url)=>{
          this.imgSource24 = url;
          })
          firebase.storage().ref().child('bg/mo1.png').getDownloadURL().then((url)=>{
          this.imgSource25 = url;
          })
          firebase.storage().ref().child('bg/mo2.png').getDownloadURL().then((url)=>{
          this.imgSource26 = url;
          })
          firebase.storage().ref().child('bg/s1.png').getDownloadURL().then((url)=>{
          this.imgSource27 = url;
          })
          firebase.storage().ref().child('obj/a1.png').getDownloadURL().then((url)=>{
          this.imgSource28 = url;
          })
          firebase.storage().ref().child('obj/a2.png').getDownloadURL().then((url)=>{
          this.imgSource29 = url;
          })
          firebase.storage().ref().child('obj/a3.png').getDownloadURL().then((url)=>{
          this.imgSource30 = url;
          })
          firebase.storage().ref().child('obj/a4.png').getDownloadURL().then((url)=>{
          this.imgSource31 = url;
          })
          firebase.storage().ref().child('obj/a5.png').getDownloadURL().then((url)=>{
          this.imgSource32 = url;
          })
          firebase.storage().ref().child('obj/a6.png').getDownloadURL().then((url)=>{
          this.imgSource33 = url;
          })
          firebase.storage().ref().child('obj/a7.png').getDownloadURL().then((url)=>{
          this.imgSource34 = url;
          })
          firebase.storage().ref().child('obj/a8.png').getDownloadURL().then((url)=>{
          this.imgSource35 = url;
          })
          firebase.storage().ref().child('obj/a9.png').getDownloadURL().then((url)=>{
          this.imgSource36 = url;
          })
          firebase.storage().ref().child('obj/a10.png').getDownloadURL().then((url)=>{
          this.imgSource37 = url;
          })
          firebase.storage().ref().child('obj/a11.png').getDownloadURL().then((url)=>{
          this.imgSource38 = url;
          })
          firebase.storage().ref().child('obj/a12.png').getDownloadURL().then((url)=>{
          this.imgSource39 = url;
          })
          firebase.storage().ref().child('obj/a13.png').getDownloadURL().then((url)=>{
          this.imgSource40 = url;
          })

          firebase.storage().ref().child('obj/o1.png').getDownloadURL().then((url)=>{
          this.imgSource41 = url;
          })
          firebase.storage().ref().child('obj/o2.png').getDownloadURL().then((url)=>{
          this.imgSource42 = url;
          })
          firebase.storage().ref().child('obj/o3.png').getDownloadURL().then((url)=>{
          this.imgSource43 = url;
          })
          firebase.storage().ref().child('obj/o4.png').getDownloadURL().then((url)=>{
          this.imgSource44 = url;
          })
          firebase.storage().ref().child('obj/o5.png').getDownloadURL().then((url)=>{
          this.imgSource45 = url;
          })
          firebase.storage().ref().child('obj/o6.png').getDownloadURL().then((url)=>{
          this.imgSource46 = url;
          })
          firebase.storage().ref().child('obj/o7.png').getDownloadURL().then((url)=>{
          this.imgSource47 = url;
          })

         firebase.storage().ref().child('bg/groung1.png').getDownloadURL().then((url)=>{
          this.imgSource48 = url;
          })



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudioPage');
    

  }



 

  

  async e1() {
this.navCtrl.push('CharsPage');
  }

  async e2() {
this.navCtrl.push('BackgroundPage');
  }

    ngOnInit() {
    // $('.myCarousel').slick({
    //   dots: true,
    //   centerMode: true,
    //   infinite: false,
    //   centerPadding: '60px',
    //   slidesToShow: 1
    // });
  }


  loadScript () { var script = document.createElement('script');
   script.type = 'text/javascript'; 
   script.src = 'assets/js/craftyGame.js'; 
   document.body.appendChild(script); };

         async b1() {
this.navCtrl.push('DisplayPage');
  } 
}
