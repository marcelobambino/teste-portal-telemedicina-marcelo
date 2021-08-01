import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { PayloadModel } from './../../models/payload/payload.model';
import { RocketModel } from 'src/app/models/rocket/rocket.model';
import { CrewModel } from 'src/app/models/crew/crew.model';

import { CrewService } from 'src/app/services/crew/crew.service';
import { PayloadService } from 'src/app/services/payload/payload.service';
import { RocketService } from 'src/app/services/rocket/rocket.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  crew?: CrewModel;
  rocket?: RocketModel;
  payload?: PayloadModel;
  showAndHiden = false;

  crews: string[] = [];
  payloads: string[] = [];
  crewMember: any = '';

  @ViewChild('dialogCrew', { static: false }) dialogCrew: TemplateRef<any> | any; // open modal crew
  @ViewChild('dialogRocket', { static: false }) dialogRocket: TemplateRef<any> | any; // open modal crew
  @ViewChild('dialogPayloads', { static: false }) dialogPayloads: TemplateRef<any> | any; // open modal payloads

  valImg?: number = 0;

   constructor(  public dialog: MatDialog, 
                private crewService: CrewService,
                private payloadService: PayloadService,
                private rocketService: RocketService,
                private toastr: ToastrService) { 
                  // do nothing...
                }

  ngOnInit(): void {
        // Lifecycle methods should not be empty  @angular-eslint/no-empty-lifecycle-method
        () => undefined
  }

  // OPEN MODAL CREWS
  openDialogModalCrews(crews: any): void {
    this.showAndHiden = true;
    this.crews = [];
    this.payloads = [];
    this.rocket = {};
    this.crews = crews;
    this.dialog.open(this.dialogCrew, {      
      autoFocus: false,
      disableClose: false,
      panelClass: 'custom-dialog-crewsRocket'
    });
    this.crewRocket(this.crews[0], 0)
  }

  // FIND CREW
  crewRocket(id: string, crewMember: any) {
    this.crewMember = `0${crewMember + 1}`;

    this.crewService.getCrewRocket(id)
      .subscribe((res: CrewModel) => {
        this.crew = res;
      }, err => {
        this.toastr.error('Error to find crew', 'Crew');
      })
  }

  // OPEN MODAL PAYLOADS
  openDialogModalPayloads(payloads: any): void {
    this.crews = [];
    this.payloads = [];
    this.rocket = {};
    this.payloads = payloads;

    this.dialog.open(this.dialogPayloads, {
      autoFocus: false,
      disableClose: false,
      panelClass: 'custom-dialog-payloads'
    });
    this.payloadRocket(this.payloads[0])
  }

  // FIND PAYLOADS
  payloadRocket(id: string) {
    this.payloadService.getPayloadRocket(id)
      .subscribe((res: PayloadModel) => {
        this.payload = res;
      }, err => {
        this.toastr.error('Error to find payload', 'Payload');
      })
  }

  // OPEN MODAL ROCKETS
  openDialogModalRockets(rocketInfo: any) {
    this.showAndHiden = false;
    this.rocket = {};
    this.crews = [];
    this.payloads = [];
    this.rocket = rocketInfo;
    this.dialog.open(this.dialogRocket, {
      autoFocus: false,
      disableClose: false,
      panelClass: 'custom-dialog-crewsRocket'
    });
    this.findRocket(this.rocket)
  }

  // FIND PAYLOADS
  findRocket(id: any) {    
    this.rocketService.getRocket(id)
      .subscribe((res: PayloadModel) => {
        this.rocket = res;
      }, err => {
        this.toastr.error('Error to find rocket', 'Rocket');
      })
  }

  showImg(i: number) {
    this.valImg = i;
  }

  close(){
    this.dialog.closeAll();
 }

}
