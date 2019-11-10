import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { BookingsService } from 'src/app/services/bookings/bookings.service';

@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.scss']
})
export class AdminBookingsComponent implements OnInit {

  bookings;
  filter: string = "";
  search: string;
  constructor(private sideBarSV: SidebarService, private bookingsService: BookingsService) {
  }

  ngOnInit() {
    this.bookingsService.getAllBookings().subscribe((bookingsSnapshot) => {
      this.bookings = [];
      bookingsSnapshot.forEach(( e: any ) => {
        this.bookings.push({
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        });
      });
      console.log(this.bookings);
    });
  }

  toggleSideBar() {
    this.sideBarSV.toggleStatus();
    console.log(this.bookings[0].data.name)
  }
}
