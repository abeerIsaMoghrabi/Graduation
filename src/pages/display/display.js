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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DisplayPage = /** @class */ (function () {
    function DisplayPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //  this.loadScript1() ;
        this.name = navParams.get('data');
        //alert(""+this.name);
        this.loadScript2();
    }
    DisplayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DisplayPage');
    };
    DisplayPage.prototype.loadScript1 = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'assets/js/craftyGame.js';
        document.body.appendChild(script);
    };
    ;
    DisplayPage.prototype.loadScript2 = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'assets/js/displayPage.js';
        document.body.appendChild(script);
    };
    ;
    DisplayPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-display',
            templateUrl: 'display.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], DisplayPage);
    return DisplayPage;
}());
export { DisplayPage };
//# sourceMappingURL=display.js.map