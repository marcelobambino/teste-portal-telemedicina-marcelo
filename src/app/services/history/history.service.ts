import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HistoryModel } from 'src/app/models/history/history.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  API_URL: string = environment.API_URL + 'history';

  constructor(private httpClient: HttpClient) { }

  getHistory(): Observable<HistoryModel[]> {
    return this.httpClient.get<HistoryModel[]>(this.API_URL).pipe(
      map((res) => {
        return res;
      }));
  }
}
