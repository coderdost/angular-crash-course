import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const routes : Routes = [
  {path:'cart',component:CartComponent},
  {path:'product/:fruit',component:ProductComponent},
]

@NgModule({
  declarations: [
    CartComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    SharedModule
  ]
})
export class CartModule { }
