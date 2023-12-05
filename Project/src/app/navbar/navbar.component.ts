import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cart_value=0
  constructor(private productService:ProductsService)
  {
  }
  cart:number[] | undefined
  ngOnInit(): void {
    this.productService.get_cart_value().subscribe(val=>this.cart_value=val)
  }

  
}