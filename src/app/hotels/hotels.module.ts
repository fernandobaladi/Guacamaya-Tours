import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsComponent } from './hotels/hotels.component';



@NgModule({
  declarations: [HotelsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HotelsComponent
  ],
})
export class HotelsModule { }
