import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { datepickerAnimation } from 'ngx-bootstrap/datepicker/datepicker-animations';

@Component({
  selector: 'app-vacation-builder-step2',
  templateUrl: './vacation-builder-step2.component.html',
  styleUrls: ['./vacation-builder-step2.component.scss']
})
export class VacationBuilderStep2Component implements OnInit {

  minDate: Date;
  maxDate: Date;
  // minDateOut: Date;
  // maxDateOut: Date;

  constructor() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate() -0);
    this.maxDate.setDate(this.maxDate.getDate()+365);
    // this.minDateOut = new Date();
    // this.maxDateOut = new Date();
    // this.minDate.setDate(this.minDateOut.getDate() );
    // this.maxDate.setDate(this.maxDateOut.getDate()+365);

    
   }

  ngOnInit() {
  }

}
