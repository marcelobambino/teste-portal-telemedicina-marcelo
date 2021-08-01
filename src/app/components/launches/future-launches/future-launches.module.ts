import { CommonModule } from '@angular/common';
import { FutureLaunchesComponent } from './future-launches.component';
import { NgModule } from "@angular/core";
import { MaterialModule } from '../../material.module';
import { ModalModule } from '../../modal/modal.component.module';

@NgModule({
    declarations:[FutureLaunchesComponent],
    imports:[
        CommonModule,
        MaterialModule,
        ModalModule
    ],
    exports: [FutureLaunchesComponent]
})
export class FutureLaunchesModule { }