webpackJsonp([1],{

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoiceAudioPageModule", function() { return VoiceAudioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__voice_audio__ = __webpack_require__(513);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VoiceAudioPageModule = (function () {
    function VoiceAudioPageModule() {
    }
    VoiceAudioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__voice_audio__["a" /* VoiceAudioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__voice_audio__["a" /* VoiceAudioPage */]),
            ],
        })
    ], VoiceAudioPageModule);
    return VoiceAudioPageModule;
}());

//# sourceMappingURL=voice-audio.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FIREBASE_CONFIG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceAudioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MEDIA_FILES_KEY = 'mediaFiles';
var FIREBASE_CONFIG = {
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
var VoiceAudioPage = (function () {
    function VoiceAudioPage(navCtrl, mediaCapture, storage, file, media) {
        this.navCtrl = navCtrl;
        this.mediaCapture = mediaCapture;
        this.storage = storage;
        this.file = file;
        this.media = media;
        this.hid = true;
        this.vv = "";
        this.start = 0;
        this.mp3file = this.media.create(this.file.dataDirectory + 'recording.mp3');
        this.mediaFiles = [];
        this.onSuccess = function (snapshot) {
        };
        this.onErrors = function (error) {
        };
        this.loadScript();
        this.rec();
    }
    VoiceAudioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get(MEDIA_FILES_KEY).then(function (res) {
            _this.mediaFiles = JSON.parse(res) || [];
        });
    };
    VoiceAudioPage.prototype.captureAudio = function () {
        var _this = this;
        this.mediaCapture.captureAudio().then(function (res) {
            _this.storeMediaFiles(res);
        }, function (err) { return console.error(err); });
    };
    VoiceAudioPage.prototype.captureVideo = function () {
        var _this = this;
        var options = {
            limit: 1,
            duration: 30
        };
        this.mediaCapture.captureVideo(options).then(function (res) {
            var capturedFile = res[0];
            var fileName = capturedFile.name;
            var dir = capturedFile['localURL'].split('/');
            dir.pop();
            var fromDirectory = dir.join('/');
            var toDirectory = _this.file.dataDirectory;
            _this.file.copyFile(fromDirectory, fileName, toDirectory, fileName).then(function (res) {
                _this.storeMediaFiles([{ name: fileName, size: capturedFile.size }]);
            }, function (err) {
                console.log('err: ', err);
            });
        }, function (err) { return console.error(err); });
    };
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
    VoiceAudioPage.prototype.play = function (myFile) {
        if (myFile.name.indexOf('.wav') > -1) {
            var audioFile = this.media.create(myFile.localURL);
            audioFile.play();
        }
        else {
            var path = this.file.dataDirectory + myFile.name;
            var url = path.replace(/^file:\/\//, '');
            var video = this.myVideo.nativeElement;
            video.src = url;
            video.play();
        }
    };
    VoiceAudioPage.prototype.dataURLtoBlob = function (myURL) {
        var binary = atob(myURL.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'audio/mp3' });
    };
    VoiceAudioPage.prototype.upload = function () {
        if (this.ftu) {
            var uploadTask = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref().child('audios/myaud.mp3').put(this.ftu);
            uploadTask.then(this.onSuccess, this.onErrors);
        }
    };
    VoiceAudioPage.prototype.storeA = function (myFile) {
        this.hid = false;
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
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["initializeApp"](FIREBASE_CONFIG);
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref();
        console.log("hi2");
        var metadata = {
            contentType: 'audio/amr',
        };
        var filePath = myFile.localURL;
        //"../../assets/KP.mp3";  
        var voiceRef = storageRef.child("voiceB");
        var blob = new Blob([filePath], { type: 'audio/amr' });
        voiceRef.put(blob, metadata);
    };
    //////////////////////////////////////////////
    VoiceAudioPage.prototype.storeMediaFiles = function (files) {
        var _this = this;
        this.storage.get(MEDIA_FILES_KEY).then(function (res) {
            if (res) {
                var arr = JSON.parse(res);
                arr = arr.concat(files);
                _this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
            }
            else {
                _this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files));
            }
            _this.mediaFiles = _this.mediaFiles.concat(files);
        });
    };
    VoiceAudioPage.prototype.loadScript = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'assets/js/AudioR.js';
        document.body.appendChild(script);
    };
    ;
    ////////////////////////////////////////////////////////
    VoiceAudioPage.prototype.rec = function () {
        console.log(this.file.dataDirectory + 'recording.mp3');
        if (this.start == 0) {
            console.log('rec');
            this.mp3file.startRecord();
            this.start = 1;
            console.log('rec2');
        }
        else {
            console.log('stop rec');
            this.mp3file.stopRecord();
            console.log(this.file);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myvideo'),
        __metadata("design:type", Object)
    ], VoiceAudioPage.prototype, "myVideo", void 0);
    VoiceAudioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-voice-audio',template:/*ion-inline-start:"C:\Users\Moghrabi\Graduation\src\pages\voice-audio\voice-audio.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Media Capture\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <ion-row>\n    <ion-col>\n      <button ion-button full (click)="captureAudio()">Capture Audio</button>\n    </ion-col>\n    <ion-col>\n      <button ion-button full (click)="captureVideo()">Capture Video</button>\n    </ion-col>\n        <ion-col>\n      <button ion-button full (click)="storeA()">store</button>\n    </ion-col>\n  </ion-row>\n \n  <ion-list>\n    <ion-item *ngFor="let file of mediaFiles" tappable (click)="storeA(file)" text-wrap>\n      {{ file.name }}\n      <p >{{file.localURL}}</p>\n      <p>{{ file.size / 1000 / 1000 | number }} MB</p>\n    </ion-item>\n  </ion-list>\n \n  <video controls autoplay #myvideo>\n  </video>\n</ion-content>'/*ion-inline-end:"C:\Users\Moghrabi\Graduation\src\pages\voice-audio\voice-audio.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__["a" /* MediaCapture */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__["a" /* MediaCapture */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__["a" /* Media */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__["a" /* Media */]) === "function" && _e || Object])
    ], VoiceAudioPage);
    return VoiceAudioPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=voice-audio.js.map

/***/ })

});
//# sourceMappingURL=1.js.map