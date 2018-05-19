webpackJsonp([5],{

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main__ = __webpack_require__(511);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MainPageModule = (function () {
    function MainPageModule() {
    }
    MainPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main__["a" /* MainPage */]),
            ],
        })
    ], MainPageModule);
    return MainPageModule;
}());

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
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
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = (function () {
    function MainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.smallList = false;
    }
    MainPage.prototype.showSmallList = function () {
        if (this.smallList == false) {
            this.smallList = true;
        }
        else if (this.smallList == true) {
            this.smallList = false;
        }
    };
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage.prototype.goTologin = function () {
        this.navCtrl.push('LoginPage');
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"C:\Users\Moghrabi\Graduation\src\pages\main\main.html"*/'<!--\n\n  Generated template for the MainPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n\n\n<ion-content>\n\n	<div class="girl-back">\n\n		<div class="cover"></div>\n\n	<div class="container-fluid header-div "  style="z-index: 1" >\n\n    <div class="container">\n\n        <!--<div class="row" >-->\n\n           <div class="logo "><a href="#">STORY</a></div>\n\n    <div class="float-right list-div ">\n\n        <!--col-sm-6 offset-4-->\n\n        <ul >\n\n            <li class="log-btn  float-right header-li" (click)="goTologin()">sign in</li>\n\n            <li class=" header-li float-right"><a   full [navPush]="userProf">Profile</a></li>\n\n            <li class=" header-li float-right"><a href="#">Studio</a></li>\n\n            <li class=" header-li float-right"><a href="#">Home</a></li>\n\n        \n\n\n\n\n\n        </ul>\n\n\n\n    </div>\n\n        <span  (click)="showSmallList()" ><ion-icon name="menu" class="menu-icon float-right"></ion-icon></span>\n\n  <ul  class="list-small" [hidden]="!smallList">\n\n            <li  class=" header-li" (click)="goTologin()" ><a >sign  in </a></li>\n\n            <li class=" header-li "><a   full [navPush]="userProf">Profile</a></li>\n\n            <li class=" header-li "><a href="#">Studio</a></li>\n\n            <li class=" header-li "><a href="#">Home</a></li>\n\n\n\n\n\n\n\n        </ul>\n\n    <div class="clearfix"></div>\n\n    <!--</div>-->\n\n    </div>\n\n</div>\n\n<div >\n\n<ion-grid>\n\n  <ion-row >\n\n<ion-col    col-xs-12 col-sm-12 col-md-7   offset-1 style="margin-top: 140px;" class="main-title">\n\n	<h1 class="title">it is your story!</h1>\n\n	<p class="second-title">animated<span style="color: #12B3B0; padding-left: 5px;">cartoon</span> </p>\n\n\n\n</ion-col>\n\n<ion-col col-xs-12 col-sm-6 col-md-3   justify-content-end class="search-body" >\n\n\n\n	<input type="text" name="search" class="search" placeholder="search ..">\n\n\n\n</ion-col>\n\n\n\n</ion-row>\n\n</ion-grid>\n\n\n\n</div>\n\n</div>\n\n\n\n\n\n<div>\n\n	<div class="container-fluid " style="padding-top: 62px;"  >\n\n    <div class="container">\n\n	<ion-grid class="container2">\n\n		<div class="pop-title"> popular stories</div>\n\n  <ion-row class="card-body" justify-content-center>\n\n\n\n  	<ion-col col-8 col-sm-6 col-md-4 col-lg-3 class="card"  >\n\n	\n\n		<div class="card-img-cover"></div>\n\n		<div class="card-img"></div>\n\n\n\n		<div class="card-info">\n\n\n\n			<label class="card-txt">storyA</label><br>\n\n			<label class="auther-name">by Abeer Moghrabi</label>\n\n		</div>\n\n	\n\n</ion-col>\n\n  	<ion-col col-8 col-sm-6 col-md-4 col-lg-3 class="card"  >\n\n	\n\n		<div class="card-img-cover"></div>\n\n		<div class="card-img"></div>\n\n\n\n		<div class="card-info">\n\n\n\n			<label class="card-txt">storyA</label><br>\n\n			<label class="auther-name">by Abeer Moghrabi</label>\n\n		</div>\n\n	\n\n</ion-col>\n\n  	<ion-col col-8 col-sm-6 col-md-4 col-lg-3 class="card"  >\n\n	\n\n		<div class="card-img-cover"></div>\n\n		<div class="card-img"></div>\n\n\n\n		<div class="card-info">\n\n\n\n			<label class="card-txt">storyA</label><br>\n\n			<label class="auther-name">by Abeer Moghrabi</label>\n\n		</div>\n\n	\n\n</ion-col>\n\n  	<ion-col col-8 col-sm-6 col-md-4 col-lg-3 class="card"  >\n\n	\n\n		<div class="card-img-cover"></div>\n\n		<div class="card-img"></div>\n\n\n\n		<div class="card-info">\n\n\n\n			<label class="card-txt">storyA</label><br>\n\n			<label class="auther-name">by Abeer Moghrabi</label>\n\n		</div>\n\n	\n\n</ion-col>\n\n  	\n\n  \n\n  </ion-row>\n\n</ion-grid>\n\n</div>\n\n</div>\n\n</div>\n\n<div class="container-fluid " style="margin-top: 62px; padding-top: 20px;padding-bottom: 20px; background-color: #12B3B0;"  >\n\n    <div class="container">\n\n      <div class="title" style="text-align: center;">about us</div>\n\n      <ion-grid>\n\n    	<ion-row justify-content-center>\n\n    		<ion-col col-sm-6>\n\n    			<ion-icon name="contact" class="we"></ion-icon>\n\n    			<div>\n\n    				<p class="txt-f">Animated cartoon is an application for parents and kindergarten teachers. It will provide a way to facilitate children\'s education by making animated stories of their games in kindergarten.  It is also help parents make stories for their children and help the child understand stories well and imagine characters. The most important aspects in our project is take a photo to the character and then convert it to a cartoon character. Then the person who will use the application will choose background and movements of character based on the story scenario. The application saves all the movements and displays them once as a story. Then add audio to the story.</p>\n\n    			</div>\n\n    		</ion-col>\n\n    	</ion-row>\n\n    </ion-grid>\n\n    </div>\n\n</div>\n\n\n\n\n\n<div class="container-fluid" style="background-color: #1e231f; height: 200px;">\n\n  <div class="container">\n\n    \n\n     \n\n      <ion-grid>\n\n    	<ion-row justify-content-center>\n\n    		<ion-col col-sm-6 class="footer-title">\n\n          GET IN TOUCH\n\n    		</ion-col>\n\n    	</ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Moghrabi\Graduation\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ })

});
//# sourceMappingURL=5.js.map