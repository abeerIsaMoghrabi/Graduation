import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams ,  Platform } from 'ionic-angular';

import * as firebase from 'firebase/app';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture';
import { Storage } from '@ionic/storage';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

import { storage } from 'firebase';

const MEDIA_FILES_KEY = 'mediaFiles';
export const FIREBASE_CONFIG =
 {
    apiKey: "AIzaSyAwzSQGq1EYiVTEAKlTlNHFtbm1IrZYbtg",
    authDomain: "myapp-b575c.firebaseapp.com",
    databaseURL: "https://myapp-b575c.firebaseio.com",
    projectId: "myapp-b575c",
    storageBucket: "myapp-b575c.appspot.com",
    messagingSenderId: "68982032969"
  };
/**
 * Generated class for the VoiceAudioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-voice-audio',
  templateUrl: 'voice-audio.html',
})
export class VoiceAudioPage {

hid=true;
vv="";
start=0;
mp3file: MediaObject = this.media.create(this.file.dataDirectory+'recording.mp3');
mediaFiles = [];

  @ViewChild('myvideo') myVideo: any;
  ftu:any;
  constructor(public navCtrl: NavController, private mediaCapture: MediaCapture, private storage: Storage, private file: File, private media: Media) {
  	this.loadScript();
  	this.rec();
  }
 
  ionViewDidLoad() {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      this.mediaFiles = JSON.parse(res) || [];
    })
  }
 
  captureAudio() {
    this.mediaCapture.captureAudio().then(res => {
      this.storeMediaFiles(res);
    }, (err: CaptureError) => console.error(err));
  }
 
  captureVideo() {
    let options: CaptureVideoOptions = {
      limit: 1,
      duration: 30
    }
    this.mediaCapture.captureVideo(options).then((res: MediaFile[]) => {
      let capturedFile = res[0];
      let fileName = capturedFile.name;
      let dir = capturedFile['localURL'].split('/');
      dir.pop();
      let fromDirectory = dir.join('/');      
      var toDirectory = this.file.dataDirectory;
      
      this.file.copyFile(fromDirectory , fileName , toDirectory , fileName).then((res) => {
        this.storeMediaFiles([{name: fileName, size: capturedFile.size}]);
      },err => {
        console.log('err: ', err);
      });
          },
    (err: CaptureError) => console.error(err));
  }
 
  // play(myFile) {
  //   if (myFile.name.indexOf('.wav') > -1) {
  //     const audioFile: MediaObject = this.media.create(myFile.localURL);
  //     audioFile.play();
  //   } else {
  //     let path = this.file.dataDirectory + myFile.name;
  //     let url = path.replace(/^file:\/\//, '');
  //     let video = this.myVideo.nativeElement;
  //     video.src = url;
  //     video.play();
  //   }
  // }
 ///////////////////////////////////////////////

 play(myFile) {

 
    if (myFile.name.indexOf('.wav') > -1) {
      const audioFile: MediaObject = this.media.create(myFile.localURL);
      audioFile.play();
    } else {
      let path = this.file.dataDirectory + myFile.name;
      let url = path.replace(/^file:\/\//, '');
      let video = this.myVideo.nativeElement;
      video.src = url;
      video.play();
    }

  

  }

dataURLtoBlob(myURL){
      let binary = atob(myURL.split(',')[1]);
  let array = [];
  for (let i = 0 ; i < binary.length;i++){
      array.push(binary.charCodeAt(i));
  }
      return new Blob([new Uint8Array(array)],{type:'audio/mp3'});
  }

  upload(){
  if(this.ftu){
      var uploadTask = firebase.storage().ref().child('audios/myaud.mp3').put(this.ftu);
      uploadTask.then(this.onSuccess,this.onErrors);
  }
  }

  onSuccess=(snapshot)=>{
      
  }

  onErrors=(error)=>{
      
  }

  storeA(myFile){
this.hid=false;
//   let storageRef = firebase.storage().ref();
//   let metadata = {
//     contentType: 'audio/amr',
//   };
// //let filePath = myFile.localURL;
// let filePath = `${myFile.externalDataDirectory}` + `${myFile.name}`;
//   this.file.readAsDataURL(this.file.externalDataDirectory, myFile.name).then((file) => {
//     let voiceRef = storageRef.child(`voices/${myFile.name}`).putString(file, firebase.storage.StringFormat.DATA_URL);
//     voiceRef.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
//       console.log("uploading");
//     }, (e) => {
     
//       console.log(JSON.stringify(e, null, 2));
//     }, () => {
//       var downloadURL = voiceRef.snapshot.downloadURL;
     
//     });
//   });
console.log("hi1");
firebase.initializeApp(FIREBASE_CONFIG);
  let storageRef = firebase.storage().ref();
  console.log("hi2");
    let metadata = {
      contentType: 'audio/amr',
    };

   let filePath = myFile.localURL;
   //"../../assets/KP.mp3";  
   const voiceRef = storageRef.child("voiceB");
   var blob = new Blob([filePath], {type: 'audio/amr'});
   voiceRef.put(blob,metadata);
  }
 //////////////////////////////////////////////
  storeMediaFiles(files) {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      if (res) {
        let arr = JSON.parse(res);
        arr = arr.concat(files);
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
      } else {
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files))
      }
      this.mediaFiles = this.mediaFiles.concat(files);
    })
  }

    loadScript () { 
    	var script = document.createElement('script');
   script.type = 'text/javascript'; 
   script.src = 'assets/js/AudioR.js'; 
   document.body.appendChild(script); };

   ////////////////////////////////////////////////////////

   rec(){ 
    console.log(this.file.dataDirectory+'recording.mp3');
    if(this.start == 0){
      console.log('rec');
       this.mp3file.startRecord();
      this.start = 1;
      console.log('rec2');
    }else{
      console.log('stop rec')
      this.mp3file.stopRecord();
      console.log(this.file)
    }
  }

}
