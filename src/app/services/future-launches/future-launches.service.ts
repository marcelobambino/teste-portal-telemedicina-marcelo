import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { LauncheModel } from 'src/app/models/launche/launche.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FutureLaunchesService {

  API_URL: string = environment.API_URL + "launches/upcoming";

  constructor(private httpClient: HttpClient) { }

  getFutureLaunches(): Observable<LauncheModel[]> {
    return this.httpClient.get<LauncheModel[]>(this.API_URL).pipe(
      map((res) => {
        return res;
      }));
  }
}
