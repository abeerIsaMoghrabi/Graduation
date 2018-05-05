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
import * as firebase from 'firebase/app';
import 'slick-carousel/slick/slick';
/**
 * Generated class for the StudioPage page.
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
var StudioPage = /** @class */ (function () {
    function StudioPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        // public base64Image: string;
        //  mySelectedPhoto;
        //  loading;
        //  currentPhoto;
        this.newStory = false;
        this.storyN = "";
        this.getMyURL();
        this.loadScript();
    }
    StudioPage.prototype.getMyURL = function () {
        var _this = this;
        firebase.storage().ref().child('bg/t1.png').getDownloadURL().then(function (url) {
            _this.imgSource = url;
        });
        firebase.storage().ref().child('bg/t2.png').getDownloadURL().then(function (url) {
            _this.imgSource2 = url;
        });
        firebase.storage().ref().child('bg/t3.png').getDownloadURL().then(function (url) {
            _this.imgSource3 = url;
        });
        firebase.storage().ref().child('bg/t4.png').getDownloadURL().then(function (url) {
            _this.imgSource4 = url;
        });
        firebase.storage().ref().child('bg/t5.jpg').getDownloadURL().then(function (url) {
            _this.imgSource5 = url;
        });
        firebase.storage().ref().child('bg/t6.png').getDownloadURL().then(function (url) {
            _this.imgSource6 = url;
        });
        firebase.storage().ref().child('bg/t7.png').getDownloadURL().then(function (url) {
            _this.imgSource7 = url;
        });
        firebase.storage().ref().child('bg/t8.png').getDownloadURL().then(function (url) {
            _this.imgSource8 = url;
        });
        firebase.storage().ref().child('bg/t9.png').getDownloadURL().then(function (url) {
            _this.imgSource9 = url;
        });
        firebase.storage().ref().child('bg/m1.png').getDownloadURL().then(function (url) {
            _this.imgSource10 = url;
        });
        firebase.storage().ref().child('bg/m2.png').getDownloadURL().then(function (url) {
            _this.imgSource11 = url;
        });
        firebase.storage().ref().child('bg/m3.png').getDownloadURL().then(function (url) {
            _this.imgSource12 = url;
        });
        firebase.storage().ref().child('bg/m4.png').getDownloadURL().then(function (url) {
            _this.imgSource13 = url;
        });
        firebase.storage().ref().child('bg/g1.png').getDownloadURL().then(function (url) {
            _this.imgSource14 = url;
        });
        firebase.storage().ref().child('bg/g2.png').getDownloadURL().then(function (url) {
            _this.imgSource15 = url;
        });
        firebase.storage().ref().child('bg/g3.png').getDownloadURL().then(function (url) {
            _this.imgSource16 = url;
        });
        firebase.storage().ref().child('bg/g4.png').getDownloadURL().then(function (url) {
            _this.imgSource17 = url;
        });
        firebase.storage().ref().child('bg/g5.png').getDownloadURL().then(function (url) {
            _this.imgSource18 = url;
        });
        firebase.storage().ref().child('bg/g6.png').getDownloadURL().then(function (url) {
            _this.imgSource19 = url;
        });
        firebase.storage().ref().child('bg/f1.png').getDownloadURL().then(function (url) {
            _this.imgSource20 = url;
        });
        firebase.storage().ref().child('bg/f2.png').getDownloadURL().then(function (url) {
            _this.imgSource21 = url;
        });
        firebase.storage().ref().child('bg/f3.png').getDownloadURL().then(function (url) {
            _this.imgSource22 = url;
        });
        firebase.storage().ref().child('bg/f4.png').getDownloadURL().then(function (url) {
            _this.imgSource23 = url;
        });
        firebase.storage().ref().child('bg/f5.png').getDownloadURL().then(function (url) {
            _this.imgSource24 = url;
        });
        firebase.storage().ref().child('bg/mo1.png').getDownloadURL().then(function (url) {
            _this.imgSource25 = url;
        });
        firebase.storage().ref().child('bg/mo2.png').getDownloadURL().then(function (url) {
            _this.imgSource26 = url;
        });
        firebase.storage().ref().child('bg/s1.png').getDownloadURL().then(function (url) {
            _this.imgSource27 = url;
        });
        firebase.storage().ref().child('obj/a1.png').getDownloadURL().then(function (url) {
            _this.imgSource28 = url;
        });
        firebase.storage().ref().child('obj/a2.png').getDownloadURL().then(function (url) {
            _this.imgSource29 = url;
        });
        firebase.storage().ref().child('obj/a3.png').getDownloadURL().then(function (url) {
            _this.imgSource30 = url;
        });
        firebase.storage().ref().child('obj/a4.png').getDownloadURL().then(function (url) {
            _this.imgSource31 = url;
        });
        firebase.storage().ref().child('obj/a5.png').getDownloadURL().then(function (url) {
            _this.imgSource32 = url;
        });
        firebase.storage().ref().child('obj/a6.png').getDownloadURL().then(function (url) {
            _this.imgSource33 = url;
        });
        firebase.storage().ref().child('obj/a7.png').getDownloadURL().then(function (url) {
            _this.imgSource34 = url;
        });
        firebase.storage().ref().child('obj/a8.png').getDownloadURL().then(function (url) {
            _this.imgSource35 = url;
        });
        firebase.storage().ref().child('obj/a9.png').getDownloadURL().then(function (url) {
            _this.imgSource36 = url;
        });
        firebase.storage().ref().child('obj/a10.png').getDownloadURL().then(function (url) {
            _this.imgSource37 = url;
        });
        firebase.storage().ref().child('obj/a11.png').getDownloadURL().then(function (url) {
            _this.imgSource38 = url;
        });
        firebase.storage().ref().child('obj/a12.png').getDownloadURL().then(function (url) {
            _this.imgSource39 = url;
        });
        firebase.storage().ref().child('obj/a13.png').getDownloadURL().then(function (url) {
            _this.imgSource40 = url;
        });
        firebase.storage().ref().child('obj/o1.png').getDownloadURL().then(function (url) {
            _this.imgSource41 = url;
        });
        firebase.storage().ref().child('obj/o2.png').getDownloadURL().then(function (url) {
            _this.imgSource42 = url;
        });
        firebase.storage().ref().child('obj/o3.png').getDownloadURL().then(function (url) {
            _this.imgSource43 = url;
        });
        firebase.storage().ref().child('obj/o4.png').getDownloadURL().then(function (url) {
            _this.imgSource44 = url;
        });
        firebase.storage().ref().child('obj/o5.png').getDownloadURL().then(function (url) {
            _this.imgSource45 = url;
        });
        firebase.storage().ref().child('obj/o6.png').getDownloadURL().then(function (url) {
            _this.imgSource46 = url;
        });
        firebase.storage().ref().child('obj/o7.png').getDownloadURL().then(function (url) {
            _this.imgSource47 = url;
        });
        firebase.storage().ref().child('bg/groung1.png').getDownloadURL().then(function (url) {
            _this.imgSource48 = url;
        });
    };
    StudioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StudioPage');
    };
    StudioPage.prototype.e1 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push('CharsPage');
                return [2 /*return*/];
            });
        });
    };
    StudioPage.prototype.e2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push('BackgroundPage');
                return [2 /*return*/];
            });
        });
    };
    StudioPage.prototype.ngOnInit = function () {
        // $('.myCarousel').slick({
        //   dots: true,
        //   centerMode: true,
        //   infinite: false,
        //   centerPadding: '60px',
        //   slidesToShow: 1
        // });
    };
    StudioPage.prototype.loadScript = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'assets/js/craftyGame.js';
        document.body.appendChild(script);
    };
    ;
    StudioPage.prototype.b1 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push('DisplayPage');
                return [2 /*return*/];
            });
        });
    };
    StudioPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-studio',
            templateUrl: 'studio.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, LoadingController])
    ], StudioPage);
    return StudioPage;
}());
export { StudioPage };
//# sourceMappingURL=studio.js.map