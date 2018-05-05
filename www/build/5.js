webpackJsonp([5],{

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(143);
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



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    // public books: FirebaseListObservable<Book[]>;
    function LoginPage(aFAuth, navCtrl, navParams) {
        this.aFAuth = aFAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
        this.isLogin = false;
        this.activeFR = true;
        this.activeFL = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.aFAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.push('HomePage');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.aFAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.setRoot('HomePage');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.Addstorage = function () {
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
    LoginPage.prototype.activateR = function () {
        this.activeFR = true;
        this.activeFL = false;
    };
    LoginPage.prototype.activateL = function () {
        this.activeFR = false;
        this.activeFL = true;
    };
    LoginPage.prototype.getStyleRBack = function () {
        if (this.activeFR) {
            return "#12B3B0";
        }
        else {
            return "";
        }
    };
    LoginPage.prototype.getStyleRBorder = function () {
        if (this.activeFR) {
            return "#12B3B0";
        }
        else {
            return "";
        }
    };
    LoginPage.prototype.getStyleLBack = function () {
        if (this.activeFL) {
            return "#12B3B0";
        }
        else {
            return "";
        }
    };
    LoginPage.prototype.getStyleLBorder = function () {
        if (this.activeFL) {
            return "#12B3B0";
        }
        else {
            return "";
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Moghrabi\Graduation\src\pages\login\login.html"*/'\n\n\n\n\n\n<!-- <ion-content class="background">\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Login Form\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list no-line>\n\n  <ion-item>\n\n    <ion-label floating>Email Address</ion-label>\n\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>Password</ion-label>\n\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button (click)="login(user)">Login</button>\n\n  <button ion-button color="light" (click)="register()">Register</button>\n\n  </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n -->\n\n <ion-content  >\n\n  <div class="container-fluid login-back">\n\n    <div class="container">\n\n<ion-grid>\n\n  <ion-row justify-content-center>\n\n    <ion-col  col-sm-6 >\n\n      <div class="login-body">\n\n        <div class="mark-cont">\n\n        <div class="mark"   style="border-color: #12B3B0;\n\nbackground-color: #12B3B0;"  [style.background-color]="getStyleLBack()" [style.border]="getStyleLBorder()" (click)="activateL()" >login</div>\n\n        <div class="mark" [style.background-color]="getStyleRBack()" [style.border]="getStyleRBorder()"  (click)="activateR()" >register</div>\n\n      </div>\n\n         <div class="line"></div>\n\n        <label class="lable-style"  [hidden]="!activeFR" >Name</label>\n\n        <input type="text" name="name" class="input-style"  [hidden]="!activeFR" >\n\n        <label class="lable-style" >Email</label>\n\n         <input type="text" name="email" class="input-style" [(ngModel)]="user.email">\n\n         <label class="lable-style">password</label>\n\n         <input type="text" name="password" class="input-style"  [(ngModel)]="user.password">\n\n         <div class="btn-cont">\n\n            <button class="btn-style" [hidden]="!activeFL" (click)="login(user)">login</button>\n\n         <button class="btn-style"  [hidden]="!activeFR" (click)="register()">register</button>\n\n         </div>\n\n        \n\n      </div>\n\n    </ion-col>\n\n</ion-row>\n\n\n\n</ion-grid>\n\n\n\n\n\n    </div>\n\n    \n\n\n\n  </div>\n\n   \n\n\n\n </ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Moghrabi\Graduation\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=5.js.map