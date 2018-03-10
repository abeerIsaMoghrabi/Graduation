import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';
import * as firebase from 'firebase/app';
/**
 * Generated class for the HomePage page.
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
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

   public base64Image: string;
    mySelectedPhoto;
    loading;
    currentPhoto;
    imgSource;



  constructor(public camera: Camera, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {

  //firebase.initializeApp(FIREBASE_CONFIG);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  takePhoto(){

  const options: CameraOptions = {
    quality: 100,
    targetHeight: 200,
    targetWidth: 200,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }


 this.camera.getPicture(options).then((imageData) => {
 this.loading = this.loadingCtrl.create({
 content:"Taking photo wait ...."
 });
 this.loading.present();
 this.mySelectedPhoto =
 this.dataURLtoBlob('data:image/jpeg;base64,' + imageData);
 this.upload();

}, (err) => {
 // Handle error
});

  }

  dataURLtoBlob(myURL){
      let binary = atob(myURL.split(',')[1]);
  let array = [];
  for (let i = 0 ; i < binary.length;i++){
      array.push(binary.charCodeAt(i));
  }
      return new Blob([new Uint8Array(array)],{type:'image/jpeg'});
  }

  upload(){
  if(this.mySelectedPhoto){
      var uploadTask = firebase.storage().ref().child('images/myphoto.jpg').put(this.mySelectedPhoto);
      uploadTask.then(this.onSuccess,this.onErrors);
  }
  }

  onSuccess=(snapshot)=>{
      this.currentPhoto = snapshot.downloadURL;
      this.loading.dismiss();
  }

  onErrors=(error)=>{
      console.log(error);
      this.loading.dismiss();
  }

  getMyURL(){
      firebase.storage().ref().child('images/myphoto.jpg').getDownloadURL().then((url)=>{
          this.imgSource = url;
          })
  }

   takePicture2(){
    /*this.camera.getPicture({
          destinationType: this.camera.DestinationType.DATA_URL,
          targetWidth: 1000,
          targetHeight: 1000
      }).then((imageData) => {
        // imageData is a base64 encoded string
          this.base64Image = "data:image/jpeg;base64," + imageData;
      }, (err) => {
          console.log(err);
      });*/

         //const pictures = storage().ref().child('images/p1.jpg');

         //pictures.putString(this.base64Image,'data_url');


      try{

     const options: CameraOptions = {
         quality: 100,
         targetHeight: 200,
         targetWidth: 200,
         destinationType: this.camera.DestinationType.DATA_URL,
         encodingType: this.camera.EncodingType.JPEG,
         mediaType: this.camera.MediaType.PICTURE
       }


       const result =  this.camera.getPicture(options);
       const image = 'data:image/jpeg;base64,${result}';
       const pictures = storage().ref().child('images/p1.jpg');
       pictures.putString(this.base64Image,'data_url');


}
catch(e){
console.error(e);
}

    }

    async b1() {
this.navCtrl.push('StudioPage');
  }

  async b2() {
this.navCtrl.push('ViewerPage');
  }

}
