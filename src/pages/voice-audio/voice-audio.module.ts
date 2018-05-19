import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoiceAudioPage } from './voice-audio';

@NgModule({
  declarations: [
    VoiceAudioPage,
  ],
  imports: [
    IonicPageModule.forChild(VoiceAudioPage),
  ],
})
export class VoiceAudioPageModule {}
