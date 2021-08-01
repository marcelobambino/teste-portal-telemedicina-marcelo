import { FutureLaunchesModule } from './launches/future-launches/future-launches.module';
import { PastLaunchesModule } from './launches/past-launches/past-launches.module';
import { HeaderModule } from './header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { ModalModule } from './modal/modal.component.module';
import { HistoryModule } from './history/history.module';


@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    HeaderModule,
    PastLaunchesModule,
    FutureLaunchesModule,
    HistoryModule,
    ModalModule
  ],

  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    HeaderModule,
    PastLaunchesModule,
    FutureLaunchesModule,
    HistoryModule,
    ModalModule
  ],
  providers: [],
})

export class ComponentsModule { }