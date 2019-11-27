import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacationBuilderRoutingModule } from './vacation-builder-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { VacationBuilderComponent } from './vacation-builder/vacation-builder.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { VacationBuilderStep2Component } from './vacation-builder-step2/vacation-builder-step2.component';


@NgModule({
  declarations: [
    VacationBuilderComponent,
    VacationBuilderStep2Component
  ],
  imports: [
    CommonModule,
    VacationBuilderRoutingModule,
    SharedModule,
    CarouselModule.forRoot()
  ]
})
export class VacationBuilderModule { }
