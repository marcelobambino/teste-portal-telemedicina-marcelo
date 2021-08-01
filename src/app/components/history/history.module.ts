import { HistoryComponent } from './history.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HistoryComponent]
})
export class HistoryModule { }
