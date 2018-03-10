import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { Camera } from '@ionic-native/camera';
import { AngularFireModule } from 'angularfire2';
import { storage } from 'firebase';


export const FIREBASE_CONFIG =
 {
    apiKey: "AIzaSyAwzSQGq1EYiVTEAKlTlNHFtbm1IrZYbtg",
    authDomain: "myapp-b575c.firebaseapp.com",
    databaseURL: "https://myapp-b575c.firebaseio.com",
    projectId: "myapp-b575c",
    storageBucket: "myapp-b575c.appspot.com",
    messagingSenderId: "68982032969"
  };

@NgModule({
providers: [
    Camera
    ],
  declarations: [
    HomePage,
  ],
  imports: [

    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {

}
