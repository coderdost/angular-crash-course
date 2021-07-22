import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name=''
  items=[];
  constructor() { }

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
