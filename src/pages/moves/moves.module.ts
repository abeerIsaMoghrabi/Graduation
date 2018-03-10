import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovesPage } from './moves';

@NgModule({
  declarations: [
    MovesPage,
  ],
  imports: [
    IonicPageModule.forChild(MovesPage),
  ],
})
export class MovesPageModule {}
