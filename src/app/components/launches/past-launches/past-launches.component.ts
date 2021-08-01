import { PastLaunchesService } from './../../../services/past-launches/past-launches.service';
import { Component, OnInit } from '@angular/core';
import { LauncheModel } from 'src/app/models/launche/launche.model';
import { ActivatedRoute } from '@angular/router';
import { Title } from "@angular/platform-browser";

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-past-launches',
  templateUrl: './past-launches.component.html',
  styleUrls: ['./past-launches.component.css']
})
export class PastLaunchesComponent implements OnInit {

  launches?: LauncheModel[];
  title? : any;

  constructor(  private pastLaunchesService: PastLaunchesService,
                private toastr: ToastrService,
                private activatedRoute : ActivatedRoute,
                private titleService:Title
              ) { }

  ngOnInit(): void {
    this.getPastLaunches();
    this.setPageTitle();
  }

  getPastLaunches() {
      this.pastLaunchesService.getPastLaunches()
      .subscribe((res: LauncheModel[]) => {
        this.launches = res;
      },
      err=>{
        this.toastr.error('Error to getPastLaunches! ', err);
      })
  }

  setPageTitle() {
    this.activatedRoute.data.subscribe(data => {
      this.title=data;
      this.titleService.setTitle(this.title.title);
    })
  }
}
