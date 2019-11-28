import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacationBuilderRoutingModule } from './vacation-builder-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { VacationBuilderComponent } from './vacation-builder/vacation-builder.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { VacationBuilderStep2Component } from './vacation-builder-step2/vacation-builder-step2.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { VacationBuilderStep3Component } from './vacation-builder-step3/vacation-builder-step3.component';
import { VacationBuilderStep4Component } from './vacation-builder-step4/vacation-builder-step4.component';
import { VacationBuilderStep5Component } from './vacation-builder-step5/vacation-builder-step5.component';

@NgModule({
  declarations: [
    VacationBuilderComponent,
    VacationBuilderStep2Component,
    VacationBuilderStep3Component,
    VacationBuilderStep4Component,
    VacationBuilderStep5Component
  ],
  imports: [
    CommonModule,
    VacationBuilderRoutingModule,
    SharedModule,
    CarouselModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ]
})
export class VacationBuilderModule { }
