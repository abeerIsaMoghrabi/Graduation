var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { storage } from 'firebase';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export var FIREBASE_CONFIG = {
    apiKey: "AIzaSyAwzSQGq1EYiVTEAKlTlNHFtbm1IrZYbtg",
    authDomain: "myapp-b575c.firebaseapp.com",
    databaseURL: "https://myapp-b575c.firebaseio.com",
    projectId: "myapp-b575c",
    storageBucket: "myapp-b575c.appspot.com",
    messagingSenderId: "68982032969"
};
var HomePage = /** @class */ (function () {
    function HomePage(camera, navCtrl, navParams, loadingCtrl, aFAuth) {
        //firebase.initializeApp(FIREBASE_CONFIG);
        var _this = this;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.aFAuth = aFAuth;
        this.smallList = false;
        this.onSuccess = function (snapshot) {
            _this.currentPhoto = snapshot.downloadURL;
            _this.loading.dismiss();
        };
        this.onErrors = function (error) {
            console.log(error);
            _this.loading.dismiss();
        };
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
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
    HomePage.prototype.showSmallList = function () {
        if (this.smallList == false) {
            this.smallList = true;
        }
        else if (this.smallList == true) {
            this.smallList = false;
        }
    };
    HomePage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            targetHeight: 200,
            targetWidth: 200,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.loading = _this.loadingCtrl.create({
                content: "Taking photo wait ...."
            });
            _this.loading.present();
            _this.mySelectedPhoto =
                _this.dataURLtoBlob('data:image/jpeg;base64,' + imageData);
            _this.upload();
        }, function (err) {
            // Handle error
        });
    };
    HomePage.prototype.dataURLtoBlob = function (myURL) {
        var binary = atob(myURL.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    };
    HomePage.prototype.upload = function () {
        if (this.mySelectedPhoto) {
            var uploadTask = firebase.storage().ref().child('images/myphoto.jpg').put(this.mySelectedPhoto);
            uploadTask.then(this.onSuccess, this.onErrors);
        }
    };
    HomePage.prototype.getMyURL = function () {
        var _this = this;
        firebase.storage().ref().child('images/myphoto.jpg').getDownloadURL().then(function (url) {
            _this.imgSource = url;
        });
    };
    HomePage.prototype.takePicture2 = function () {
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
        try {
            var options = {
                quality: 100,
                targetHeight: 200,
                targetWidth: 200,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
            };
            var result = this.camera.getPicture(options);
            var image = 'data:image/jpeg;base64,${result}';
            var pictures = storage().ref().child('images/p1.jpg');
            pictures.putString(this.base64Image, 'data_url');
        }
        catch (e) {
            console.error(e);
        }
    };
    HomePage.prototype.b1 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push('StudioPage');
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.b2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push('ViewerPage');
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.disp = function (n) {
        this.navCtrl.push('DisplayPage', {
            data: n
        });
    };
    HomePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-home',
            templateUrl: 'home.html',
        }),
        __metadata("design:paramtypes", [Camera, NavController, NavParams, LoadingController, AngularFireAuth])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map