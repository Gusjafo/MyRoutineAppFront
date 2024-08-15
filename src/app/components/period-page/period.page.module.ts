import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodPageRoutingModule } from './period-page-routing.module';
import { MaterialModule } from '../../material.module';
import { PeriodPageComponent } from './period-page.component';

@NgModule({
  declarations: [PeriodPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PeriodPageRoutingModule
  ]
})
export class PeriodPageModule { }
