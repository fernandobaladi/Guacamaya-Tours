import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';


const routes: Routes = [
{
  path: '',
  redirectTo: '/admin/dashboard',
  pathMatch: 'full'
},
  {
    path: '',
    children:[
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'bookings',
        component: AdminBookingsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
