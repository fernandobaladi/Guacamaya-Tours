import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';

@Component({
  selector: 'app-client-side-bar',
  templateUrl: './client-side-bar.component.html',
  styleUrls: ['./client-side-bar.component.scss']
})
export class ClientSideBarComponent implements OnInit {
  
  status = false

  constructor(private sideBarSV: SidebarService) {
    
    this.sideBarSV.statusClientMenu.subscribe(e => {
      this.status = e;
    })
   }
  ngOnInit() {
  }

  toggleSideBar( ){
    this.sideBarSV.toggleStatusClientMenu();
  }
}
