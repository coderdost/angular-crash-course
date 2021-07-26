import { Component, Input, OnInit,EventEmitter, Output, OnChanges } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges {
  componentName = 'Cart';
  btnDisabled = true;
  item='';
  cart:any = [];
  bg='grey';
  @Input() customer='john'
  @Output() cartEvent = new EventEmitter()


  constructor( private dService: DataService) {
    console.log(this.constructor.name)

    setTimeout(()=>{
      this.btnDisabled = false;
    },2000)

    this.cart = this.dService.cart; //reference binding
    this.customer = this.dService.name
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
  // getItem(e:any){
  //   this.item= e.target.value;
  //   console.log(e.target.value);
  // }

  addToCart(){
   this.cart.push({name:this.item, time:new Date()});
   this.item= ''
   this.cartEvent.emit(this.cart);
  }

}
