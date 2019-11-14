import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels/hotels.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HotelsComponent],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    SharedModule,
    CarouselModule.forRoot()
  ]
})
export class HotelsModule { }
