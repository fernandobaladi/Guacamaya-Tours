import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';

@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.scss']
})
export class AdminBookingsComponent implements OnInit {

  constructor(private sideBarSV: SidebarService) { }

  ngOnInit() {
  }

  toggleSideBar(){
    this.sideBarSV.toggleStatus();
  }


}
