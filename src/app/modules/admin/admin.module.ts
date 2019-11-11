import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminStatesComponent } from './admin-states/admin-states.component';
import { SortBookingsPipe } from '../../pipes/sort-bookings.pipe';
import { SearchBookingPipe } from '../../pipes/search-booking.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminCitiesComponent } from './admin-cities/admin-cities.component';
import { AdminDestinationCategoriesComponent } from './admin-destination-categories/admin-destination-categories.component';
import { AdminHotelServicesComponent } from './admin-hotel-services/admin-hotel-services.component';
import { AdminHabsFacilitiesComponent } from './admin-habs-facilities/admin-habs-facilities.component';
import { AdminDestinationsComponent } from './admin-destinations/admin-destinations.component';

@NgModule({
  declarations: [AdminDashboardComponent,
    AdminLoginComponent, 
    AdminStatesComponent,
    AdminBookingsComponent,
    SortBookingsPipe,
    SearchBookingPipe,
    AdminCitiesComponent,
    AdminDestinationCategoriesComponent,
    AdminHotelServicesComponent,
    AdminHabsFacilitiesComponent,
    AdminDestinationsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    Ng2SearchPipeModule
  ]
})
export class AdminModule { }
