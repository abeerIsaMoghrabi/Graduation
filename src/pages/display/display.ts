import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Platform } from 'ionic-angular';
import { Transfer } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { Media, MediaObject } from '@ionic-native/media';
import { NativeAudio } from '@ionic-native/native-audio';
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
 
  constructor(public navCtrl: NavController, private nativeAudio: NativeAudio,public plt: Platform ,public navParams: NavParams,private transfer: Transfer, private file: File ,private media: Media) {
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

// private downloadFile(downloadURL: string, filename: string) {
//    const fileTransfer = this.transfer.create();
//     return new Promise((resolve, reject) => {
//         fileTransfer.download(downloadURL, this.file.dataDirectory + filename, true).then(_ => {
//             console.log("download of " + filename + " complete");
//             resolve("download finished");
//         }).catch(err => {
//             console.log(err);
//             reject("download error");
//         });
//     });
// }
// startAudio(){
//   console.log("start audio");
//   this.downloadFile("https://firebasestorage.googleapis.com/v0/b/myapp-b575c.appspot.com/o/Katy-Perry-Firework-Official.mp3?alt=media&token=05f6f001-9c98-49e4-9376-291c8856ff9f", "Katy-Perry-Firework-Official.mp3")
// }


playAu(){

}





getCordovaPath(mediaPath){
if(this.plt.is("android")){
return "file://"+mediaPath;//"file://"+;
}
return mediaPath;
}

}
