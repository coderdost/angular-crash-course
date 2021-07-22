import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoApp';
  cart=[]
  constructor(private dService: DataService){
    console.log(this.constructor.name)
     this.cart = this.dService.cart;
  }
}
