import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GenericFilter } from 'src/app/interfaces/pivotlevel/IFilter';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  public filter: BehaviorSubject<GenericFilter> = new BehaviorSubject<GenericFilter>({ symbol: '', interval: '', limit: 1000 });

  constructor() { }
}
