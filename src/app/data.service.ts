import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cart = [];
  constructor() {
    console.log(this.constructor.name)
   }
}
