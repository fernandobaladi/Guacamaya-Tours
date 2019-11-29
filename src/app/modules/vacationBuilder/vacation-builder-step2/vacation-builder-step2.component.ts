import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { datepickerAnimation } from 'ngx-bootstrap/datepicker/datepicker-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-vacation-builder-step2',
  templateUrl: './vacation-builder-step2.component.html',
  styleUrls: ['./vacation-builder-step2.component.scss']
})
export class VacationBuilderStep2Component implements OnInit {

  minDate: Date;
  maxDate: Date;
  vacationDate: String[];
  checkIn: String;
  checkOut: String;

  public clientDateForm: FormGroup;

  constructor(private sideBarSV: SidebarService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, private orderSV: OrderService, ) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 0);
    this.maxDate.setDate(this.maxDate.getDate() + 365);

  }

  ngOnInit() {
    this.createClientDateForm();
  }

  saveInfo() {
    const auxBooking= {
      checkIn: this.checkIn,
      checkOut: this.checkOut
    }
    this.orderSV.updateBooking(auxBooking);
    this.router.navigate(["vacationBuilder/step3"]);
  }

  saveValues() {

    this.checkIn = this.vacationDate[0];
    this.checkOut = this.vacationDate[1];
    console.log(this.checkIn);
    console.log(this.checkOut);
    this.saveInfo();

  }

  createClientDateForm() {
    this.clientDateForm = this.fb.group({
      date: ['', Validators.required],
    });
  }

}
