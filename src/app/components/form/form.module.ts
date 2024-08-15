import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class FormModule { }
