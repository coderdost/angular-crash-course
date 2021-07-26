import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ShortenPipe } from './shorten.pipe';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'cart',component:CartComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ShortenPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
