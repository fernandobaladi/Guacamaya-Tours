import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [HomeComponent, SliderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CarouselModule.forRoot()
  ]
})
export class HomeModule { }
