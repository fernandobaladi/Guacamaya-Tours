import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DestinationModule } from './destination.module';
import { DestinationComponent } from './destination/destination.component';


const routes: Routes = [
  {
    path: '',
    component: DestinationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinationRoutingModule { }
