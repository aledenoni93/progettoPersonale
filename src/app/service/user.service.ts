import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  datiUtente = new ReplaySubject;
  apiBaseUrl = 'api/users';

  constructor( private http: HttpClient) { }

  insertUser(user : any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/signup`, user);
  }
}
