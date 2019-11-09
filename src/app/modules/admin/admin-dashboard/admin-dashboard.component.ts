import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private sideBarSV: SidebarService) { }

  ngOnInit() {
  }

  toggleSideBar(){
    this.sideBarSV.toggleStatus();
  }

}
