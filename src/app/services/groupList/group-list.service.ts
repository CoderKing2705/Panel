import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../Constants';

@Injectable({
  providedIn: 'root'
})
export class GroupListService {

  private apiUrl = AppSettings.API_ENDPOINT + "/api/BusinessGroups";

  constructor(private httpClient: HttpClient) { }

  public GetBusinessGroups() {
    return this.httpClient.get<any>(this.apiUrl).pipe();
  }
}
