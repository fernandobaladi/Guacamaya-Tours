import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacationBuilderComponent } from './vacation-builder/vacation-builder.component';
import { VacationBuilderStep2Component } from './vacation-builder-step2/vacation-builder-step2.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/vacationBuilder/step1',
    pathMatch: 'full' 
  },
    {
      path: '',
      children:[
        {
          path: 'step1',
          component: VacationBuilderComponent
        },
        {
          path: 'step2',
          component: VacationBuilderStep2Component
        },
      ]
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacationBuilderRoutingModule { }
