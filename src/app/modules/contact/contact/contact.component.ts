import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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


}
