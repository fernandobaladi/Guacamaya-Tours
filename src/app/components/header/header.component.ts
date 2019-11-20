import { Component, OnInit, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerColor="#62D2BE";
  screen:string;

  constructor(private sideBarSV: SidebarService,) { 
    if (window.innerWidth <= 991) {
      this.screen = "medium";
    }
    else {
      this.screen = "large";
    }
  }

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

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {

    console.log(window.innerWidth);

    if (window.innerWidth <= 991) {
      this.screen = "medium";
    }
    else {
      this.screen = "large";
    }
  }

  toggleSideBar() {
    this.sideBarSV.toggleStatusClientMenu();
  }
}
