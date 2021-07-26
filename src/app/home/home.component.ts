import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges,OnDestroy {
  name=''
  items=[];
  cart =[];
  constructor(private dService: DataService) {
    this.cart = this.dService.cart;
    console.log(this.constructor.name)

   }

   ngOnInit(): void {
    console.log(this.constructor.name,'ngOnInit')
  }
  ngOnChanges(): void {
    console.log(this.constructor.name,'ngOnChanges')
  }
  ngOnDestroy(): void {
    console.log(this.constructor.name,'ngOnDestroy')
  }

  enterName(n:any){
  //   this.name = n.value;
  //   n.value = ''
  //  console.log(n.value)
  this.dService.name = n.value;
  }

  updateCart(e:any){
    this.items = e;
  }

}
