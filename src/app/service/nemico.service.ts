import { Injectable } from '@angular/core';
import { Nemico } from './../models/nemico.models';
import { NEMICI } from '../mocks/nemici.mocks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NemicoService {

  constructor() { }

  getNemici(): Observable<Nemico[]> {
      return of (NEMICI);
  }

  getNemico(id: number): Observable<Nemico> {
    const nemico = NEMICI.find(nemico => nemico._id === id );
    return of (nemico);
  }
}
