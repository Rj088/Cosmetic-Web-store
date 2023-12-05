import { Component } from '@angular/core';
import { SpeechService } from '../speech.service';
@Component({
  selector: 'app-speech-to-text-component',
  templateUrl: './speech-to-text-component.component.html',
  styleUrls: ['./speech-to-text-component.component.scss']
})
export class SpeechToTextComponentComponent {

  isStillRecoginze = false;
  constructor(public service: SpeechService) {
    this.service.init();
  }
  ngOnInit(): void {}
  startService() {
    this.isStillRecoginze = this.service.start() === true ? true : false;
  }

  stopService() {
    this.isStillRecoginze = this.service.stop() === false ? false : true;
  }
}
