var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ActionSheetController, ToastController, Platform } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { AngularFireAuth } from 'angularfire2/auth';
var ViewerPage = /** @class */ (function () {
    // constructor(public camera: Camera,public navCtrl: NavController, public navParams: NavParams ,public loadingCtrl: LoadingController) {
    function ViewerPage(navCtrl, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl, aFAuth) {
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.aFAuth = aFAuth;
        // public base64Image: string;
        //    mySelectedPhoto;
        //    loading;
        //    currentPhoto;
        this.lastImage = null;
        this.loadScript();
    }
    ViewerPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    ViewerPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                    _this.presentToast(_this.lastImage);
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                _this.presentToast(_this.lastImage);
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    // Create a new name for the image
    ViewerPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    ViewerPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    ViewerPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    ViewerPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            // this.presentToast("cordova.file.dataDirectory" + img);
            return cordova.file.dataDirectory + img;
        }
    };
    ViewerPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // console.log('ionViewDidLoad ViewerPage');
        this.aFAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                console.log('Welcome to APP_NAME' + data.email);
                _this.userInfo = data.uid;
            }
            else {
                console.log(" Could not find authentication details");
            }
        });
    };
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
    ViewerPage.prototype.loadScript = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'assets/js/api.js';
        document.body.appendChild(script);
    };
    ViewerPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-viewer',
            templateUrl: 'viewer.html',
        }),
        __metadata("design:paramtypes", [NavController, Camera, Transfer, File, FilePath, ActionSheetController, ToastController, Platform, LoadingController, AngularFireAuth])
    ], ViewerPage);
    return ViewerPage;
}());
export { ViewerPage };
//# sourceMappingURL=viewer.js.map