import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private strings = new BehaviorSubject<any>(['Paper Loaded1', 'Paper Loaded2', 'Paper Loaded3']);
  public string = this.strings.asObservable();

  constructor() { }

  changeString(string) {
    this.strings.next(string);
  }

}
