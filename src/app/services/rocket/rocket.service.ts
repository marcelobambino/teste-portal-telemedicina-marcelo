import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { RocketModel } from 'src/app/models/rocket/rocket.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RocketService {

  API_URL: string = environment.API_URL + 'rockets';

  constructor(private httpClient: HttpClient) { }

  getRocket(id: string): Observable<RocketModel> {
    return this.httpClient.get<RocketModel>(`${this.API_URL}/${id}`).pipe(
      map((res) => {
        return res
      }))
  }
}
