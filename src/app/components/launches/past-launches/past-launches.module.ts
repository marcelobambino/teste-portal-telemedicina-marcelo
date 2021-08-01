import { PastLaunchesComponent } from './past-launches.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MaterialModule } from '../../material.module';
import { ModalModule } from '../../modal/modal.component.module';

@NgModule({
    declarations: [PastLaunchesComponent],
    imports: [
        CommonModule,
        MaterialModule,
        ModalModule
    ],
    exports:[PastLaunchesComponent]
})
export class PastLaunchesModule { }