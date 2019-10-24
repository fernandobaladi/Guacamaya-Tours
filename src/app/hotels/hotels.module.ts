import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsComponent } from './hotels/hotels.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HotelsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HotelsComponent
  ],
})
export class HotelsModule { }
