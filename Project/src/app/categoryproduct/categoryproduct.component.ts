import { Component, OnInit } from '@angular/core';
import { AllProductsComponent } from '../all-products/all-products.component';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoryproduct',
  templateUrl: './categoryproduct.component.html',
  styleUrls: ['./categoryproduct.component.scss']
})
export class CategoryproductComponent implements OnInit {

  constructor(
    private productService:ProductsService,
    private activaroute:ActivatedRoute
  ){}
  Products=this.productService.Products
  filtered_products=this.Products;

  addToCart(product:any) {
    product.buttonText = 'Added';
  }


  ngOnInit(): void { 
    if( this.activaroute.snapshot.url.join('/').match('brush'))
    {
      this.filtered_products=this.Products.filter(product=>product.category.match("brush"))
    }
     if( this.activaroute.snapshot.url.join('/').match("lipstick"))
    {
      this.filtered_products=this.Products.filter(product=>product.category.match("lipstick"))
    }
    if( this.activaroute.snapshot.url.join('/').match("nailpolish"))
    {
      this.filtered_products=this.Products.filter(product=>product.category.match("nailpolish"))
    }
  }
  add_to_cart(product_id:number)
  {
    this.productService.update_cart_value(product_id);
  }

  sort!:string
  if_Clicked()
  {
    // console.log(this.sort);
    if(this.sort.match("LTH"))
    {
      this.filtered_products.sort((a, b) => a.Price - b.Price);
  
    }
    if(this.sort.match("HTL"))
    {
      this.filtered_products.sort((a, b) => b.Price - a.Price);
    }
    if(this.sort.match("AZ"))
    {
      this.filtered_products.sort((a, b) => a.Name.localeCompare(b.Name));
  
    }
    if(this.sort.match("ZA"))
    {
      this.filtered_products.sort((a, b) => b.Name.localeCompare(a.Name));
  
    }
}
}
