import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JourneyRoutingModule } from './journey-routing.module';
import { JourneyComponent } from './journey/journey.component';


@NgModule({
  declarations: [JourneyComponent],
  imports: [
    CommonModule,
    JourneyRoutingModule
  ]
})
export class JourneyModule { }
