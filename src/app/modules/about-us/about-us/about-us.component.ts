import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  missionActive = false;
  visionActive = false;

  constructor() { }

  ngOnInit() {
  }


  activateMission() {

    if (this.missionActive) {
      this.missionActive = false;
    } else {

      this.missionActive = true;
      this.visionActive = false;
    }
  }

  activateVision() {
    if (this.visionActive) {
      this.visionActive = false;
    } else {

      this.missionActive = false;
      this.visionActive = true;
    }
  }

}
