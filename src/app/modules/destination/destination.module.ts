import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationComponent } from './destination/destination.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [DestinationComponent],
  imports: [
    CommonModule,
    DestinationRoutingModule,
    SharedModule,
    CarouselModule.forRoot()
  ]
})
export class DestinationModule { }
