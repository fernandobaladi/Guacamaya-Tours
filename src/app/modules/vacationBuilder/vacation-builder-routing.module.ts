import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacationBuilderComponent } from './vacation-builder/vacation-builder.component';


const routes: Routes = [
  {
    path: '',
    component: VacationBuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacationBuilderRoutingModule { }
