import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminStatesComponent } from './admin-states/admin-states.component';


@NgModule({
  declarations: [AdminDashboardComponent, AdminBookingsComponent, AdminLoginComponent, AdminStatesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
