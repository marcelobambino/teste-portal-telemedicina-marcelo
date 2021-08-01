import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LauncheModel } from 'src/app/models/launche/launche.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PastLaunchesService {

  API_URL: string = environment.API_URL + 'launches/past';

  constructor(private httpClient : HttpClient) { }

  getPastLaunches(): Observable<LauncheModel[]> {
    return this.httpClient.get<LauncheModel[]>(this.API_URL).pipe(
      map((res) => {
        return res;
      }));
  }
}
