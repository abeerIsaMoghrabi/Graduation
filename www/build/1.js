webpackJsonp([1],{

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewerPageModule", function() { return ViewerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewer__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewerPageModule = (function () {
    function ViewerPageModule() {
    }
    ViewerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__viewer__["a" /* ViewerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__viewer__["a" /* ViewerPage */]),
            ],
        })
    ], ViewerPageModule);
    return ViewerPageModule;
}());

//# sourceMappingURL=viewer.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewerPage = (function () {
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
        this.backRemove = true;
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
    ViewerPage.prototype.enableB = function () {
        this.backRemove = false;
    };
    ViewerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewer',template:/*ion-inline-start:"C:\Users\Moghrabi\Graduation\src\pages\viewer\viewer.html"*/'<!--\n\n  Generated template for the ViewerPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content >\n\n  <div style="width: 80%;margin: auto;"> <img src="{{pathForImage(lastImage)}}" style="width: 100%;margin: auto;" [hidden]="lastImage === null" id="img_id"></div>\n\n    <h4 [hidden] ="true" id="imgName">{{lastImage}}</h4>\n\n   <div [hidden]="true" id=\'userInfo\'>{{userInfo}}</div>\n\n\n\n<div  [hidden]="lastImage != null" style="width:50%;margin: auto; text-align: center;\n\n    margin-top: 70%;" > <ion-icon name="camera" class="cameraa"></ion-icon></div>\n\n\n\n<div style="width:70%;margin: auto;" [hidden]="lastImage === null">\n\n  <button  onclick="testao()" class="btn-st">cartoonize</button>\n\n   <button (click)="enableB()" onclick="callLuna()" class="btn-st">backRemove</button>\n\n  <button onclick="store()" class="btn-st">store</button>\n\n</div>\n\n  \n\n <div style="width: 80%;margin: auto;"> <img style="width: 100%;margin: auto;"   id="img_res"></div> \n\n  <p id="state"></p>\n\n  <p id="demo"></p>\n\n  <div id="backgroundT"></div>\n\n<!-- luanpic -->\n\n<title>Lunapic: URL import function</title>\n\n<body>\n\n\n\n<form [hidden]="backRemove" action="https://www169.lunapic.com/editor/" method="POST" id="form1">\n\n    <input type="hidden" name="action" value="transparent">\n\n    <input type="hidden" id="pic" name="url" value="">\n\n    <input type=submit value="Edit Photo">\n\n    .. redirecting\n\n\n\n</form>\n\n</body>\n\n\n\n<!-- lunapic -->\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar >\n\n    <ion-buttons>\n\n      <button ion-button icon-left (click)="presentActionSheet()" style="color:#12b3b0 ">\n\n        <ion-icon name="camera" style="color:#12b3b0 "></ion-icon>Select Image\n\n      </button>\n\n\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Moghrabi\Graduation\src\pages\viewer\viewer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ViewerPage);
    return ViewerPage;
}());

//# sourceMappingURL=viewer.js.map

/***/ })

});
//# sourceMappingURL=1.js.map