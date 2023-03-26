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
}
