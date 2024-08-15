import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationRoutingModule } from './navigation-routing.module';
import { MaterialModule } from '../../material.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, MaterialModule, NavigationRoutingModule]
})
export class NavigationModule {}
