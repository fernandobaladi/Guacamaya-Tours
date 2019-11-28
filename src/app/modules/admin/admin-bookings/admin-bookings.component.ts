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
  loading = false;



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
          data: e.payload.doc.data(),
          realStatus: e.payload.doc.data().status
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
      statusName: ['', Validators.required],
      phoneNumber: [''],
      email: [''],
      locator: [''],
      id: ['']
    });
  }


  // modifyInfo() {
  //   this.bookingForm = this.fb.group({
  //     name: ['fdf', Validators.required],
  //     payment: ['sad', Validators.required],
  //     transferNum: ['25', Validators.required],
  //     date: ['25/12/2019', Validators.required],
  //     amount: ['52', Validators.required],
  //     status: ['Por Confirmar', Validators.required],
  //   })
  //   this.modalStatus.next(!this.modalStatus.value);
  // }
  openModal(booking) {
    if (booking) {
      this.bookingForm.controls.name.setValue(booking.data.name);
      this.bookingForm.controls.payment.setValue(booking.data.payment);
      this.bookingForm.controls.transferNum.setValue(booking.data.transferNum);
      this.bookingForm.controls.date.setValue(booking.data.date);
      this.bookingForm.controls.amount.setValue(booking.data.amount);
      this.bookingForm.controls.status.setValue(booking.data.status);
      this.bookingForm.controls.phoneNumber.setValue(booking.data.phoneNumber);
      this.bookingForm.controls.email.setValue(booking.data.email);
      this.bookingForm.controls.locator.setValue(booking.data.locator);
      this.bookingForm.controls.id.setValue(booking.id);
      if (booking.data.status === '1') {
        this.bookingForm.controls.statusName.setValue('Cancelado');
      } else if (booking.data.status === '2') {
        this.bookingForm.controls.statusName.setValue('Pagado');
      } else if (booking.data.status === '3') {
        this.bookingForm.controls.statusName.setValue('Por Confirmar');
      }
    }
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
    console.log(this.bookingForm.controls.status.value);
    this.loading = true;
    this.modalStatus.next(false);
    if (this.bookingForm.controls.status.value === '1') {
      this.bookingForm.controls.statusName.setValue('Cancelado');
    } else if (this.bookingForm.controls.status.value === '2') {
      this.bookingForm.controls.statusName.setValue('Pagado');
    } else if (this.bookingForm.controls.status.value === '3') {
      this.bookingForm.controls.statusName.setValue('Por Confirmar');
    }
    const data = {
      name: this.bookingForm.controls.name.value,
      status: this.bookingForm.controls.status.value,
      transferNum: this.bookingForm.controls.transferNum.value,
      payment: this.bookingForm.controls.payment.value,
      date: this.bookingForm.controls.date.value,
      phoneNumber: this.bookingForm.controls.phoneNumber.value,
      email: this.bookingForm.controls.email.value,
      locator: this.bookingForm.controls.locator.value,
      amount: this.bookingForm.controls.amount.value,
      statusName: this.bookingForm.controls.statusName.value
      };
    this.bookingsService.updateBooking(this.bookingForm.controls.id.value, data)
    .then(res => {
      alert('¡Se ha editado exitosamente el estado!');
      this.bookingForm.reset();
    }).catch(err => {
      this.loading = false;
      alert('Ha habido un error con la información introducida');
    });
  }
}
