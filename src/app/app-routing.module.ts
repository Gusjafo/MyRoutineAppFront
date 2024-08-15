import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'navigation',
    loadChildren: () =>
      import('./components/navigation/navigation.module')
        .then((m) => m.NavigationModule),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./components/form/form.module')
        .then((m) => m.FormModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module')
        .then((m) => m.DashboardModule),
  },
  {
    path: 'period',
    loadChildren: () =>
      import('./components/period-page/period.page.module')
        .then((m) => m.PeriodPageModule),
  },
  {
    path: '',
    redirectTo: 'navigation',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
