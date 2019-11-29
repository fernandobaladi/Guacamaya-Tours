import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationComponent } from './destination/destination.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DestinationFilterPipe } from '../../pipes/destination/destination-filter.pipe';
import { DestinationFilterByStatePipe } from 'src/app/pipes/destination/destination-filter-by-state.pipe';


@NgModule({
  declarations: [DestinationComponent,
                DestinationFilterPipe,
                DestinationFilterByStatePipe],
  imports: [
    CommonModule,
    DestinationRoutingModule,
    SharedModule,
    CarouselModule.forRoot(),
    
  ]
})
export class DestinationModule { }
