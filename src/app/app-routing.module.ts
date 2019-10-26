import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonNavigationComponent } from './navigation/common-navigation/common-navigation.component';


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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
