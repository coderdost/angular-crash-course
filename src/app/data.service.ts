import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  cart = [];
  name='dummyName';
  constructor() {
    console.log(this.constructor.name)
   }
}
