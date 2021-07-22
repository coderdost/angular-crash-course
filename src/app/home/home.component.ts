import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name=''
  items=[];
  cart =[];
  constructor(private dService: DataService) {
    this.cart = this.dService.cart;
    console.log(this.constructor.name)

   }

  ngOnInit(): void {
  }

  enterName(n:any){
    this.name = n.value;
    n.value = ''
   console.log(n.value)
  }

  updateCart(e:any){
    this.items = e;
  }

}
