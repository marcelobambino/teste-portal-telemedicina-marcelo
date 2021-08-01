import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { HistoryService } from 'src/app/services/history/history.service';
import { HistoryModel } from 'src/app/models/history/history.model';
import { ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  histories?: HistoryModel[];
  title? : any;

  constructor(private historyService: HistoryService,
    private toastr: ToastrService,
    private activatedRoute : ActivatedRoute,
    private titleService:Title) { }

  ngOnInit(): void {
    this.getHistory();
    this.setPageTitle();
  }

  getHistory() {
    this.historyService.getHistory()
    .subscribe((res: HistoryModel[]) => {
      this.histories = res;
    },
    err=>{
      this.toastr.error('Error to getHistory! ', err);
    })
}

setPageTitle() {
  this.activatedRoute.data.subscribe(data => {
    this.title=data;
    this.titleService.setTitle(this.title.title);
  })
}

}
