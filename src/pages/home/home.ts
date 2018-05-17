import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage } from 'firebase';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import * as $ from "jquery";
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
   stories: FirebaseListObservable<any[]>;
   storiesN=[];
   count=0;
   nn:String;
   activeStar=false;
   couNum=0;
  
   //items: Subscription;

   public base64Image: string;
    mySelectedPhoto;
    loading;
    currentPhoto;
    imgSource;
     userInfo

smallList=false;
  constructor(public camera: Camera, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private aFAuth: AngularFireAuth , private af: AngularFireDatabase) {

  //firebase.initializeApp(FIREBASE_CONFIG);
this.loadScript2(); 
  }

  ionViewDidLoad() {
     this.aFAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        console.log('Welcome to APP_NAME' +data.email );
         this.userInfo=data.uid;
        
this.af.list('/'+this.userInfo, { preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
         console.log(snapshot.key); 
        this.storiesN[this.count]=snapshot;

        
        this.count++;
    });

      });
  }
      else {
         console.log(" Could not find authentication details");
         
      }
    });

  }
  showSmallList(){
    if(this.smallList==false){
     this.smallList=true;
    }
    else if(this.smallList==true){
     this.smallList=false;
    }
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


disp(n){
console.log(n);

  this.navCtrl.push('DisplayPage', {

      data:n.replace(/\s/g, "")

    });

}

activeS(item){

this.af.list('/publicS').push({key:item.key,

  });
  item.val.isPublic=true
}
getStyleLColor(item){
  if(item.val.isPublic==true){
  

    return "yellow";
  }
  else if(item.val.isPublic==false){

    return "white";
  }
}

  loadScript2 () { var script = document.createElement('script');
   script.type = 'text/javascript'; 
   script.src = 'assets/js/publicJs.js'; 
   document.body.appendChild(script); };
}
