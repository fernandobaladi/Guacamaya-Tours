import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminStatesComponent } from './admin-states/admin-states.component';


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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
