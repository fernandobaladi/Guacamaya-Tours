import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerColor="#62D2BE";

  constructor() { }

  ngOnInit() {
  }

  changeHeader(section:number){
    switch (section) {
      case 1: this.headerColor="#ff0000";
        
        break;
    
      default: this.headerColor="#62D2BE";
        break;
    }
  }

}
