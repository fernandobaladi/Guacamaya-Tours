import { Component, OnInit, HostListener } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';

@Component({
  selector: 'app-vacation-builder-header',
  templateUrl: './vacation-builder-header.component.html',
  styleUrls: ['./vacation-builder-header.component.scss']
})
export class VacationBuilderHeaderComponent implements OnInit {

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
    this.sideBarSV.toggleStatusVacationMenu();
  }
}
