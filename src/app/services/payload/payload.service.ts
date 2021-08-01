import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PayloadModel } from 'src/app/models/payload/payload.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PayloadService {

  API_URL: string = environment.API_URL + 'payloads';

  constructor(private httpClient : HttpClient) { }

  getPayloadRocket(id?: string) : Observable<PayloadModel> {
    return this.httpClient.get<PayloadModel>(`${this.API_URL}/${id}`).pipe(
      map((res) => {
        return res;
      }));
  }
}
