import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminStatesComponent } from './admin-states/admin-states.component';
import { AdminCitiesComponent } from './admin-cities/admin-cities.component';
import { AdminDestinationCategoriesComponent } from './admin-destination-categories/admin-destination-categories.component';
import { AdminHotelServicesComponent } from './admin-hotel-services/admin-hotel-services.component';
import { AdminHabsFacilitiesComponent } from './admin-habs-facilities/admin-habs-facilities.component';
import { AdminDestinationsComponent } from './admin-destinations/admin-destinations.component';
import { AdminHotelsComponent } from './admin-hotels/admin-hotels.component';


const routes: Routes = [
{
  path: '',
  redirectTo: '/admin/login',
  pathMatch: 'full'
},
  {
    path: '',
    children:[
      {
        path: 'login',
        component: AdminLoginComponent
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'bookings',
        component: AdminBookingsComponent
      },
      {
        path: 'states',
        component: AdminStatesComponent
      },
      {
        path: 'cities',
        component: AdminCitiesComponent
      },
      {
        path: 'categories',
        component: AdminDestinationCategoriesComponent
      },
      {
        path: 'services',
        component: AdminHotelServicesComponent
      },
      {
        path: 'facilities',
        component: AdminHabsFacilitiesComponent
      },
      {
        path: 'destinations',
        component: AdminDestinationsComponent
      },
      {
        path: 'hotels',
        component: AdminHotelsComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
