import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonNavigationComponent } from './navigation/common-navigation/common-navigation.component';
import { AdminNavigationComponent } from './navigation/admin-navigation/admin-navigation.component';
import { VacationBuilderComponent } from './modules/vacationBuilder/vacation-builder/vacation-builder.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: CommonNavigationComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then (m => m.HomeModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./modules/contact/contact.module').then (m => m.ContactModule)
      },
      {
        path: 'about-us',
        loadChildren: () => import('./modules/about-us/about-us.module').then (m => m.AboutUsModule)
      },
      {
        path: 'hotels',
        loadChildren: () => import('./modules/hotels/hotels.module').then (m => m.HotelsModule)
      },
      {
        path: 'journey',
        loadChildren: () => import('./modules/journey/journey.module').then (m => m.JourneyModule)
      },
      {
        path: 'destination',
        loadChildren: () => import('./modules/destination/destination.module').then (m => m.DestinationModule)
      },
    ]
  },

  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminNavigationComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then (m => m.AdminModule)
      },
    ]
  },
  {
    path: '',
    component: VacationBuilderComponent,
    children: [
      {
        path: 'vacation',
        loadChildren: () => import('./modules/vacationBuilder/vacation-builder.module').then (m => m.VacationBuilderModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
