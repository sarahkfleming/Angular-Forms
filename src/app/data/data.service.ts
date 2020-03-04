import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Create a fake URL for posting at putsreq.com
  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    return this.http.post('https://putsreq.com/sUYkJA80auRVEiXtfOjS', userSettings);

    // return of(userSettings);
  }
  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }


  /*
  putsReq.com code entered into Response Builder:
   var parsedBody = JSON.parse(request.body);
   parsedBody.id = '1234';

   response.body = parsedBody;
   */
}
