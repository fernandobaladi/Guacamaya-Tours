import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  missionActive = false;
  visionActive = false;
  screen: string;


  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {


    if (window.innerWidth <= 991) {
      this.screen = "medium";
    }
    else {
      this.screen = "normal";
    }
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
