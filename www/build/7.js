webpackJsonp([7],{

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayPageModule", function() { return DisplayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__display__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DisplayPageModule = (function () {
    function DisplayPageModule() {
    }
    DisplayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__display__["a" /* DisplayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__display__["a" /* DisplayPage */]),
            ],
        })
    ], DisplayPageModule);
    return DisplayPageModule;
}());

//# sourceMappingURL=display.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DisplayPage = (function () {
    function DisplayPage(navCtrl, nativeAudio, plt, navParams, transfer, file, media) {
        this.navCtrl = navCtrl;
        this.nativeAudio = nativeAudio;
        this.plt = plt;
        this.navParams = navParams;
        this.transfer = transfer;
        this.file = file;
        this.media = media;
        //  this.loadScript1() ;
        this.name = navParams.get('data');
        //alert(""+this.name);
        this.loadScript2();
    }
    DisplayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DisplayPage');
    };
    //  loadScript1 () { var script = document.createElement('script');
    // script.type = 'text/javascript'; 
    // script.src = 'assets/js/craftyGame.js'; 
    // document.body.appendChild(script); };
    DisplayPage.prototype.loadScript2 = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'assets/js/displayPage.js';
        document.body.appendChild(script);
    };
    ;
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
    DisplayPage.prototype.playAu = function () {
    };
    DisplayPage.prototype.getCordovaPath = function (mediaPath) {
        if (this.plt.is("android")) {
            return "file://" + mediaPath; //"file://"+;
        }
        return mediaPath;
    };
    DisplayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-display',template:/*ion-inline-start:"C:\Users\Moghrabi\Graduation\src\pages\display\display.html"*/'<!--\n\n  Generated template for the DisplayPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content >\n\n<div >\n\n    <span  id="timer" style="position: absolute; left: 30px; top:10px;">00:00:00</span>\n\n\n\n    <span class="stat-btn"  onclick ="startStory()" (click)="playAu()" ><ion-icon name="play" class="play" id="playd"></ion-icon>\n\n\n\n     <ion-icon name="pause" id="pausee2" class="play" onclick="pausee2()" style="display: none;" ></ion-icon></span>\n\n    <div id="name" style="position: absolute; left:300px; top:10px;">{{name}}</div>\n\n\n\n  </div>\n\n\n\n\n\n<div class="canvas-div">\n\n\n\n<div id=\'game1\' ></div>\n\n <div class="text-ssh" id=\'txt-sp\' style="display: none;"  >\n\n\n\n\n\n             <span class="wn"  id="wn">  </span>\n\n            </div>\n\n</div>\n\n\n\n<!-- <audio id="myAudio">\n\n  <source src="../../assets/KP.mp3" type="audio/mp3">\n\n \n\n</audio> -->\n\n</ion-content>'/*ion-inline-end:"C:\Users\Moghrabi\Graduation\src\pages\display\display.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_media__["a" /* Media */]])
    ], DisplayPage);
    return DisplayPage;
}());

//# sourceMappingURL=display.js.map

/***/ })

});
//# sourceMappingURL=7.js.map