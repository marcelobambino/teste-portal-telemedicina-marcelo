import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { MainComponent } from './main.component';
import { MaterialModule } from '../components/material.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
