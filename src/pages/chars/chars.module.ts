import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharsPage } from './chars';

@NgModule({
  declarations: [
    CharsPage,
  ],
  imports: [
    IonicPageModule.forChild(CharsPage),
  ],
})
export class CharsPageModule {}
