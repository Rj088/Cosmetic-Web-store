import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { RatingComponent } from './rating/rating.component';
import { CategoryproductComponent } from './categoryproduct/categoryproduct.component';
import { CartComponent } from './cart/cart.component';
import { ProductsService } from './products.service';
import { FormsModule } from '@angular/forms';
import { SpeechToTextComponentComponent } from './speech-to-text-component/speech-to-text-component.component';


const routes:Routes=[
  {path:"allproducts",component:AllProductsComponent},
  {path:"brush",component:CategoryproductComponent},
  {path:"lipstick",component:CategoryproductComponent},
  {path:"nailpolish",component:CategoryproductComponent},
  {path:"cart",component:CartComponent},
  {path:"",component:HomeComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllProductsComponent,
    HomeComponent,
    RatingComponent,
    CategoryproductComponent,
    CartComponent,
    SpeechToTextComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
