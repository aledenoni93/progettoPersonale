import { Injectable } from '@angular/core';
import { Nemico } from './../models/nemico.models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NemicoService {

  datiNemico =  new ReplaySubject;
  apiBaseUrl = 'api/nemici';

  constructor(private http: HttpClient) { }

  getNemici(): Observable<Nemico[]> {
    return this.http.get<Nemico[]>(`${this.apiBaseUrl}/`);
  }

  getNemico(id: string): Observable<Nemico> {
    return this.http.get<Nemico>(`${this.apiBaseUrl}/${id}`)
  }

  insertNemico(nemico: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/`, nemico)
  }
}
