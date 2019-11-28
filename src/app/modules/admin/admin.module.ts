import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminStatesComponent } from './admin-states/admin-states.component';
import { SortBookingsPipe } from '../../pipes/booking/sort-bookings.pipe';
import { SearchBookingPipe } from '../../pipes/booking/search-booking.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GeneralSortPipe} from '../../pipes/states/general-sort.pipe';
import { AdminCitiesComponent } from './admin-cities/admin-cities.component';
import { AdminDestinationCategoriesComponent } from './admin-destination-categories/admin-destination-categories.component';
import { AdminHotelServicesComponent } from './admin-hotel-services/admin-hotel-services.component';
import { AdminHabsFacilitiesComponent } from './admin-habs-facilities/admin-habs-facilities.component';
import { AdminDestinationsComponent } from './admin-destinations/admin-destinations.component';
import { AdminHotelsComponent } from './admin-hotels/admin-hotels.component';
import { StatusFilterPipe } from 'src/app/pipes/states/status-filter.pipe';
import { CitiesSortPipe } from '../../pipes/cities/cities-sort.pipe';
import { SortByNamePipe} from '../../pipes/states/sort-by-name.pipe';
import { CitiesFilterByStatePipe } from '../../pipes/destinations/cities-filter-by-state.pipe';
import { ImageUploaderComponent } from 'src/app/components/image-uploader/image-uploader.component';


@NgModule({
  declarations: [AdminDashboardComponent,
    AdminLoginComponent,
    AdminStatesComponent,
    AdminBookingsComponent,
    SortBookingsPipe,
    SearchBookingPipe,
    GeneralSortPipe,
    AdminCitiesComponent,
    AdminDestinationCategoriesComponent,
    AdminHotelServicesComponent,
    AdminHabsFacilitiesComponent,
    AdminDestinationsComponent,
    AdminHotelsComponent,
    StatusFilterPipe,
    CitiesSortPipe,
    SortByNamePipe,
    CitiesFilterByStatePipe,
    ImageUploaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    Ng2SearchPipeModule
  ]
})
export class AdminModule { }
