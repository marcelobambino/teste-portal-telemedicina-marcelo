import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LauncheModel } from 'src/app/models/launche/launche.model';
import { FutureLaunchesService } from 'src/app/services/future-launches/future-launches.service';
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-future-launches',
  templateUrl: './future-launches.component.html',
  styleUrls: ['./future-launches.component.css']
})
export class FutureLaunchesComponent implements OnInit {

  launches?: LauncheModel[];
  title? : any;

  constructor(  private futureLaunchesService: FutureLaunchesService,
    private toastr: ToastrService,
    private activatedRoute : ActivatedRoute,
    private titleService:Title
  ) { }

ngOnInit(): void {
  this.getFutureLaunches();
  this.setPageTitle();
}

getFutureLaunches() {
    this.futureLaunchesService.getFutureLaunches()
    .subscribe((res: LauncheModel[]) => {
      this.launches = res;
    },
    err=>{
      this.toastr.error('Error to getFutureLaunches! ', err);
    })
  }

  setPageTitle() {
    this.activatedRoute.data.subscribe(data => {
      this.title=data;
      this.titleService.setTitle(this.title.title);
    })
  }
}
