import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../products.service';
import { SpeechService } from '../speech.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent{

  constructor(
    private productService:ProductsService,
    private service:SpeechService
  ){}
  Products=this.productService.Products
  filtered_products=this.Products;

  addToCart(product:any) {
    product.buttonText = 'Added';
  }

  add_to_cart(product_id:number)
  {
    this.productService.update_cart_value(product_id);
  }
   sort!:string
if_Clicked()
{
  console.log(this.sort);
  
  if(this.sort.match("LTH"))
  {
    this.Products.sort((a, b) => a.Price - b.Price);

  }
  if(this.sort.match("HTL"))
  {
    this.Products.sort((a, b) => b.Price - a.Price);
  }
  if(this.sort.match("AZ"))
  {
    this.Products.sort((a, b) => a.Name.localeCompare(b.Name));

  }
  if(this.sort.match("ZA"))
  {
    this.Products.sort((a, b) => b.Name.localeCompare(a.Name));

  }
}

_product_name=""
get product_name()
{
  return this._product_name
}
set product_name(product_name)
{
  this._product_name=product_name
  console.log(this._product_name);
  this.filtered_products=this.Products.filter(product=>product.Name.toLocaleLowerCase().includes(product_name.toLocaleLowerCase()))
}

onTextChanged(event: Event) {
  const text = (event.target as HTMLInputElement).value;
  this.product_name = text;
  console.log(this.product_name);
}
temp= this.service.transcript_arr;
search_name:string=""
click()
{
  console.log(this.temp);
    for(let i = 0; i < this.temp.length; i++) {
     console.log(this.temp[i]);
     if(i==0)
     {
      this.search_name=this.search_name+this.temp[i]
     }
      if(i % 2 != 0 ) {
        this.search_name=this.search_name+this.temp[i]
      }
}
console.log(this.search_name);
if(this.search_name.length!=0)
{
  this.filtered_products=this.Products.filter(product=>product.Name.toLocaleLowerCase().includes(this.search_name.toLocaleLowerCase()))
}
}
stopService() {
  this.service.stop() === false ? false : true;
}
}