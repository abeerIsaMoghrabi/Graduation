import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
    userInfo;
   isLogin=false;
    activeFR=true;
      activeFL=false;
    // public books: FirebaseListObservable<Book[]>;

  constructor(private aFAuth: AngularFireAuth,
  public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


async login(user: User) {
try {
      const result = await this.aFAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
      if (result) {
      this.navCtrl.push('HomePage');

      }
    }
    catch (e) {
      console.error(e);
    }

  }

  async register() {
//this.navCtrl.push('RegisterPage');

    try {
      const result = await this.aFAuth.auth.createUserWithEmailAndPassword(
       this.user.email, this.user.password
      );
      if (result) {
        this.navCtrl.setRoot('HomePage');
      }
    } catch (e) {
      console.error(e);
    }
  }


  public Addstorage(): void {
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

    public activateR(){
       this.activeFR=true;
       this.activeFL=false;

    }
      public activateL(){
       this.activeFR=false;
       this.activeFL=true;

    }
     public  getStyleRBack() {
    if(this.activeFR) {
        return "#12B3B0";
     
    } else {
      return "";
    }
  }


       public  getStyleRBorder() {
    if(this.activeFR) {
       return "#12B3B0";
    } else {
      return "";
    }
  }

      public  getStyleLBack() {
    if(this.activeFL) {
     return "#12B3B0";
    } else {
      return "";
    }
  }


       public  getStyleLBorder() {
    if(this.activeFL) {
      return "#12B3B0";
    } else {
      return "";
    }
  }
}
