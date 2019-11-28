import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacationBuilderComponent } from './vacation-builder/vacation-builder.component';
import { VacationBuilderStep2Component } from './vacation-builder-step2/vacation-builder-step2.component';
import { VacationBuilderStep3Component } from './vacation-builder-step3/vacation-builder-step3.component';
import { VacationBuilderStep4Component } from './vacation-builder-step4/vacation-builder-step4.component';
import { VacationBuilderStep5Component } from './vacation-builder-step5/vacation-builder-step5.component';


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
        {
          path: 'step3',
          component: VacationBuilderStep3Component
        },
        {
          path: 'step4',
          component: VacationBuilderStep4Component
        },
        {
          path: 'step5',
          component: VacationBuilderStep5Component
        },
      ]
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacationBuilderRoutingModule { }
