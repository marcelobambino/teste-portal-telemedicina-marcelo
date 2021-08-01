import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrewModel } from 'src/app/models/crew/crew.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  API_URL: string = environment.API_URL + 'crew';

  constructor(private httpClient: HttpClient) { }

  getCrewRocket(id: string): Observable<CrewModel> {
    return this.httpClient.get<CrewModel>(`${this.API_URL}/${id}`).pipe(
      map((res) => {
        return res;
      }));
  }
}
