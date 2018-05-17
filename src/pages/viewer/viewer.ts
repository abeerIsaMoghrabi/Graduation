import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ActionSheetController, ToastController, Platform, Loading} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';


import { storage } from 'firebase';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the ViewerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var cordova: any;
@IonicPage()

@Component({
  selector: 'page-viewer',
  templateUrl: 'viewer.html',
})
export class ViewerPage {

	// public base64Image: string;
 //    mySelectedPhoto;
 //    loading;
 //    currentPhoto;
 backRemove=true;
  lastImage: string = null;
    loading: Loading
    ver:string;
    userInfo;

  // constructor(public camera: Camera,public navCtrl: NavController, public navParams: NavParams ,public loadingCtrl: LoadingController) {
  constructor(public navCtrl: NavController, private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController,private aFAuth: AngularFireAuth){


 this.loadScript ();

  }


 public presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: () => {
                        this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: () => {
                        this.takePicture(this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    }
    public takePicture(sourceType) {
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };

        // Get the data of an image
        this.camera.getPicture(options).then((imagePath) => {
            // Special handling for Android library
            if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
                this.filePath.resolveNativePath(imagePath)
                    .then(filePath => {
                        let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                        let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                        this.presentToast(this.lastImage);
                    });
            } else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                this.presentToast(this.lastImage);
            }
        }, (err) => {
            this.presentToast('Error while selecting image.');
        });
    }
    // Create a new name for the image
    private createFileName() {
        var d = new Date(),
            n = d.getTime(),
            newFileName =  n + ".jpg";
        return newFileName;
    }

// Copy the image to a local folder
    private copyFileToLocalDir(namePath, currentName, newFileName) {
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
            this.lastImage = newFileName;
        }, error => {
            this.presentToast('Error while storing file.');
        });
    }

    private presentToast(text) {
        let toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    }

// Always get the accurate path to your apps folder
    public pathForImage(img) {
        if (img === null) {
            return '';
        } else {
            // this.presentToast("cordova.file.dataDirectory" + img);
            return cordova.file.dataDirectory + img;
               
        }
    }



  ionViewDidLoad() {
   // console.log('ionViewDidLoad ViewerPage');
    this.aFAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        console.log('Welcome to APP_NAME' +data.email );
         this.userInfo=data.uid;
      }
      else {
         console.log(" Could not find authentication details");
         
      }
    });
  }

//   takePhoto(){

//   const options: CameraOptions = {
//     quality: 100,
//     targetHeight: 200,
//     targetWidth: 200,
//     destinationType: this.camera.DestinationType.DATA_URL,
//     encodingType: this.camera.EncodingType.JPEG,
//     mediaType: this.camera.MediaType.PICTURE
//   }


//  this.camera.getPicture(options).then((imageData) => {
//  this.loading = this.loadingCtrl.create({
//  content:"Taking photo wait ...."
//  });
//  this.loading.present();
//  this.mySelectedPhoto =
//  this.dataURLtoBlob('data:image/jpeg;base64,' + imageData);
//  this.upload();

// }, (err) => {
//  // Handle error
// });

//   }

//    dataURLtoBlob(myURL){
//       let binary = atob(myURL.split(',')[1]);
//   let array = [];
//   for (let i = 0 ; i < binary.length;i++){
//       array.push(binary.charCodeAt(i));
//   }
//       return new Blob([new Uint8Array(array)],{type:'image/jpeg'});
//   }

//   upload(){
//   if(this.mySelectedPhoto){
//       var uploadTask = firebase.storage().ref().child('images/myphoto.jpg').put(this.mySelectedPhoto);
//       uploadTask.then(this.onSuccess,this.onErrors);
//   }
//   }

//   onSuccess=(snapshot)=>{
//       this.currentPhoto = snapshot.downloadURL;
//       this.loading.dismiss();
//   }

//   onErrors=(error)=>{
//       console.log(error);
//       this.loading.dismiss();
//   }

  loadScript () { var script = document.createElement('script');
   script.type = 'text/javascript'; 
   script.src = 'assets/js/api.js'; 
   document.body.appendChild(script); }

   enableB(){
       this.backRemove=false;
   }

   

  
}
