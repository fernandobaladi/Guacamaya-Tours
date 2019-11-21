import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { BookingsService } from 'src/app/services/bookings/bookings.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.scss']
})
export class AdminBookingsComponent implements OnInit {

  bookings;
  optionSort = '';
  search: string;
  public bookingForm: FormGroup;
  modalStatus = new BehaviorSubject(false);



  constructor(private sideBarSV: SidebarService,
              private bookingsService: BookingsService,
              private fb: FormBuilder,) {
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

    this.createBookingForm();

  }

  createBookingForm() {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      payment: ['', Validators.required],
      transferNum: ['', Validators.required],
      date: ['', Validators.required],
      amount: ['', Validators.required],
      status: ['', Validators.required],
    })
  }


  modifyInfo() {
    this.bookingForm = this.fb.group({
      name: ['fdf', Validators.required],
      payment: ['sad', Validators.required],
      transferNum: ['25', Validators.required],
      date: ['25/12/2019', Validators.required],
      amount: ['52', Validators.required],
      status: ['Por Confirmar', Validators.required],
    })
    this.modalStatus.next(!this.modalStatus.value);
  }


  changeModalStatus(val) {
    this.modalStatus.next(val)
  }
  
  toggleModalStatus() {
    this.modalStatus.next(!this.modalStatus.value);
    this.createBookingForm();
  }

  toggleSideBar() {
    this.sideBarSV.toggleStatus();
  }

  saveChanges() {
    // sendData();
    this.modalStatus.next(false);
  }
}
