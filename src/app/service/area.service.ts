import { Injectable } from '@angular/core';
import { Area } from '../models/area.models';
import { AREE } from '../mocks/aree.mocks';
import { Observable, of } from 'rxjs';
import { ReplaySubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AreaService {

  datiArea = new ReplaySubject();

  constructor() { }

  getAree(): Observable<Area[]> {
      return of (AREE)
  }

  getArea(id: number): Observable<Area> {
    const area = AREE.find(area => area._id === id );
    return of (area);
  }

  insertArea(area: any): Observable<any> {
    AREE.push(area);
    return of (AREE);
  }
}
