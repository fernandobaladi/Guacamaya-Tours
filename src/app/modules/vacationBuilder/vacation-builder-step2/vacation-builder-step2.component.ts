import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-vacation-builder-step2',
  templateUrl: './vacation-builder-step2.component.html',
  styleUrls: ['./vacation-builder-step2.component.scss']
})
export class VacationBuilderStep2Component implements OnInit {

  minDate: Date;
  maxDate: Date;

  constructor() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
   }

  ngOnInit() {
  }

}
