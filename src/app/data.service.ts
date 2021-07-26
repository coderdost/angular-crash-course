import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cart = [];
  name='dummyName';
  constructor() {
    console.log(this.constructor.name)
   }
}
