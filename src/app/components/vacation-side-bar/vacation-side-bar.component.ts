import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';

@Component({
  selector: 'app-vacation-side-bar',
  templateUrl: './vacation-side-bar.component.html',
  styleUrls: ['./vacation-side-bar.component.scss']
})
export class VacationSideBarComponent implements OnInit {
  
  status = false

  constructor(private sideBarSV: SidebarService) {
    
    this.sideBarSV.statusVacationMenu.subscribe(e => {
      this.status = e;
    })
   }
  ngOnInit() {
  }

  toggleSideBar( ){
    this.sideBarSV.toggleStatusVacationMenu();
  }
}
