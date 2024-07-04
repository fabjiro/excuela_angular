import { Component, OnInit } from '@angular/core';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

@Component({
  selector: 'app-custom-video-player',
  standalone: true,
  imports: [],
  templateUrl: './custom-video-player.component.html',
  styleUrl: './custom-video-player.component.css'
})
export class CustomVideoPlayerComponent implements OnInit{
  videoJsConfigObj = {
    controls: true,
    autoplay: true,
    preload: 'auto',

    sources: [{
      src: 'https://wiseglobal-bucket-dev-content.s3.eu-central-1.amazonaws.com/40756eab-2304-4ec1-8e64-fb368fb52240.mp4',
      type: 'video/mp4'
    }],
    controlBar: {
      enabled: true
    }
  };

  player: any;

  ngOnInit(): void {
    this.player = videojs('my-player', this.videoJsConfigObj);
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
    }
  }
}
