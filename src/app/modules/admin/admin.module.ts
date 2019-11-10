import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SortBookingsPipe } from '../../pipes/sort-bookings.pipe';
import { SearchBookingPipe } from '../../pipes/search-booking.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [AdminDashboardComponent,
    AdminBookingsComponent,
    SortBookingsPipe,
    SearchBookingPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    Ng2SearchPipeModule
  ]
})
export class AdminModule { }
