import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodPageComponent } from './period-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PeriodPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeriodPageRoutingModule {}
