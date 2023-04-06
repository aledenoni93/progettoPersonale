import { Injectable } from '@angular/core';
import { Nemico } from './../models/nemico.models';
import { NEMICI } from '../mocks/nemici.mocks';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NemicoService {

  apiBaseUrl = 'api/nemici';

  constructor(private http: HttpClient) { }

  getNemici(): Observable<Nemico[]> {
    return this.http.get<Nemico[]>(`${this.apiBaseUrl}/`);
  }

  getNemico(id: string): Observable<Nemico> {
    return this.http.get<Nemico>(`${this.apiBaseUrl}/${id}`)
  }
}
