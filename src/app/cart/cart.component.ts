import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  componentName = 'Cart';
  btnDisabled = true;
  item='';
  cart:any = [];
  bg='grey';
  @Input() customer='john'
  @Output() cartEvent = new EventEmitter()


  constructor() {
    setTimeout(()=>{
      this.btnDisabled = false;
    },2000)
   }

  ngOnInit(): void {
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
