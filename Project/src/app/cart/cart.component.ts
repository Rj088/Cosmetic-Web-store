import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent  implements OnInit 
{
constructor(private productService:ProductsService)
{}
Products=this.productService.Products
 filtered_products: { Id: number, Name: string, Rating: number, Price: number, buttonText: string, Brand: string, category: string, img: string }[] = [];
public Total:number=0
cart:number[]=this.productService.cart_array;
  ngOnInit(): void {
    for (let item of this.cart)
     {
     let temp:Number=0
      for(let id of this.Products)
      {
        if(item==id.Id)
        {
          item=item-1
          this.filtered_products.push(this.Products[item])
          this.Total=this.Total+this.Products[item].Price
          console.log(this.Total);
        }
      }
    } 
}
public removeElementById(id: number): void {
  this.filtered_products = this.filtered_products.filter(element => element.Id !== id);
}
removeToCart(price: number) {
  this.productService.remove_cart_value;
  this.Total=this.Total-price
  }
}


