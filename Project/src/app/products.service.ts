import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { AllProductsComponent } from './all-products/all-products.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  Products=[
    {
      Id:1,
      Name:"Thin brush",
      Rating:4.0,
      Price:4600,
      buttonText: 'Add to cart',
      Brand:"Spectrum",
      category:"brush",
      img:"./assets/images/B2.jpg"
    },
    {
      Id:2,
      Name:"Thick brush",
      Rating:4.6,
      Price:19000,
      buttonText: 'Add to cart',
      Brand:"Nyka",
      category:"brush",
      img:"./assets/images/B3.jpeg"

    },
    {
      Id:3,
      Name:"Glossy lipstick",
      Rating:3.6,
      Price:5200,
      buttonText: 'Add to cart',
      Brand:"Nivida",
      category:"lipstick",
      img:"./assets/images/lipstick1.jpg"
    },
    {
      Id:4,
      Name:"Matt lipstick",
      Rating:4.9,
      Price:1900,
      buttonText: 'Add to cart',
      Brand:"Poliue",
      category:"lipstick",
      img:"./assets/images/lipstick2.jpg"
    },
    {
      Id:5,
      Name:"Black Nailpolish",
      Rating:3.0,
      Price:3600,
      buttonText: 'Add to cart',
      Brand:"Zacer",
      category:"nailpolish",
      img:"./assets/images/tempnailpolish1.jpg"
    },
    {
      Id:6,
      Name:"Blue Nailpolish",
      Rating:4.0,
      Price:17000,
      buttonText: 'Add to cart',
      Brand:"Huntan",
      category:"nailpolish",
      img:"./assets/images/tempnailpolish.jpg"
    },
    {
      Id:7,
      Name:"Black up",
      Rating:3.6,
      Price:2600,
      buttonText: 'Add to cart',
      Brand:"Nordia",
      category:"brush",
      img:"./assets/images/R.jpeg"
    },
    {
      Id:8,
      Name:"SenSai",
      Rating:2.6,
      Price:5700,
      buttonText: 'Add to cart',
      Brand:"Hirotoi",
      category:"brush",
      img:"./assets/images/B2.jpg"

    },
    {
      Id:9,
      Name:"HourGlass",
      Rating:4.2,
      Price:27000,
      buttonText: 'Add to cart',
      Brand:"Glassy",
      category:"brush",
      img:"./assets/images/B3.jpeg"
    },
    {
      Id:10,
      Name:"Babe Lash",
      Rating:3.9,
      Price:6500,
      buttonText: 'Add to cart',
      Brand:"Lashy",
      category:"brush",
      img:"./assets/images/B4.png"
    },
    {
      Id:11,
      Name:"SLickGK",
      Rating:3.5,
      Price:36000,
      buttonText: 'Add to cart',
      Brand:"SGK",
      category:"brush",
      img:"./assets/images/B5.jpg"
    },
    {
      Id:12,
      Name:"Tropic",
      Rating:4.3,
      Price:9600,
      buttonText: 'Add to cart',
      Brand:"Amazonian",
      category:"brush",
      img:"./assets/images/B7.jpeg"
    },
    {
      Id:13,
      Name:"Goldie",
      Rating:4.6,
      Price:19000,
      buttonText: 'Add to cart',
      Brand:"Goldendom",
      category:"brush",
      img:"./assets/images/B8.jpeg"

    },
    {
      Id:14,
      Name:"Manish Malhotra",
      Rating:2.6,
      Price:5200,
      buttonText: 'Add to cart',
      Brand:"Malhota fam",
      category:"lipstick",
      img:"./assets/images/L1.jpg"
    },
    {
      Id:15,
      Name:"ESTEE lauder Black",
      Rating:4.9,
      Price:3600,
      buttonText: 'Add to cart',
      Brand:"LESder",
      category:"lipstick",
      img:"./assets/images/L2.jpg"
    },
    {
      Id:16,
      Name:"ESTEE lauder Red",
      Rating:3.0,
      Price:4200,
      buttonText: 'Add to cart',
      Brand:"LESder",
      category:"lipstick",
      img:"./assets/images/L3.jpeg"
    },
    {
      Id:17,
      Name:"Pink Lush",
      Rating:4.0,
      Price:96000,
      buttonText: 'Add to cart',
      Brand:"Huntan",
      category:"Lushstra",
      img:"./assets/images/L4.jpg"
    },
    {
      Id:18,
      Name:"Comeriol Pink",
      Rating:3.6,
      Price:42000,
      buttonText: 'Add to cart',
      Brand:"Luftara",
      category:"lipstick",
      img:"./assets/images/L5.jpg"
    },
    {
      Id:19,
      Name:"Milanij",
      Rating:4.6,
      Price:19000,
      buttonText: 'Add to cart',
      Brand:"Ijaya",
      category:"lipstick",
      img:"./assets/images/L6.jpeg"

    },
    {
      Id:20,
      Name:"Dior Red",
      Rating:3.6,
      Price:5200,
      buttonText: 'Add to cart',
      Brand:"Dior",
      category:"lipstick",
      img:"./assets/images/L8.jpg"
    },
    {
      Id:21,
      Name:"Matt RED",
      Rating:4.9,
      Price:1900,
      buttonText: 'Add to cart',
      Brand:"Poliue",
      category:"lipstick",
      img:"./assets/images/L9.jpg"
    },
    {
      Id:22,
      Name:"Mat Marun",
      Rating:3.0,
      Price:3600,
      buttonText: 'Add to cart',
      Brand:"Zacer",
      category:"lipstick",
      img:"./assets/images/L10.jpg"
    },
    {
      Id:23,
      Name:"Sugar Pop",
      Rating:4.0,
      Price:120000,
      buttonText: 'Add to cart',
      Brand:"Popin'",
      category:"nailpolish",
      img:"./assets/images/N1.jpg"
    },
    {
      Id:24,
      Name:"Blur Pang",
      Rating:4.6,
      Price:19000,
      buttonText: 'Add to cart',
      Brand:"Nurblur",
      category:"nailpolish",
      img:"./assets/images/N2.jpg"

    },
    {
      Id:25,
      Name:"Lid-Quid",
      Rating:3.6,
      Price:5200,
      buttonText: 'Add to cart',
      Brand:"Sparkles",
      category:"nailpolish",
      img:"./assets/images/N3.jpg"
    },
    {
      Id:26,
      Name:"Boi ee Ing",
      Rating:4.9,
      Price:63000,
      buttonText: 'Add to cart',
      Brand:"Malur",
      category:"nailpolish",
      img:"./assets/images/N4.webp"
    },
    {
      Id:27,
      Name:"Pro Conceal",
      Rating:3.0,
      Price:3600,
      buttonText: 'Add to cart',
      Brand:"Zacer",
      category:"nailpolish",
      img:"./assets/images/N5.webp"
    },
    {
      Id:28,
      Name:"Stila White",
      Rating:4.0,
      Price:17000,
      buttonText: 'Add to cart',
      Brand:"Stellar",
      category:"nailpolish",
      img:"./assets/images/N6.jpeg"
    },
    {
      Id:29,
      Name:"Stila Pink",
      Rating:3.6,
      Price:2600,
      buttonText: 'Add to cart',
      Brand:"Stellar",
      category:"nailpolish",
      img:"./assets/images/N7.jpg"
    },
    {
      Id:30,
      Name:"Sara Happ",
      Rating:4.6,
      Price:19000,
      buttonText: 'Add to cart',
      Brand:"Happaria",
      category:"nailpolish",
      img:"./assets/images/N8.jpeg"

    },
    {
      Id:31,
      Name:"BareMinerals",
      Rating:3.6,
      Price:5200,
      buttonText: 'Add to cart',
      Brand:"Nuturtic",
      category:"nailpolish",
      img:"./assets/images/N9.jpg"
    },
    {
      Id:32,
      Name:"ITcosmetic",
      Rating:5.0,
      Price:210000,
      buttonText: 'Add to cart',
      Brand:"IT",
      category:"nailpolish",
      img:"./assets/images/N10.jpg"
    }
  ]

 constructor(){}


  private cart_value: number[] = [];
  private cart_value$ = new Subject<number>();

  update_cart_value(Product_id: number) {
    console.log("Product added to cart:", Product_id);
    this.cart_value.push(Product_id);
    this.cart_value$.next(this.cart_value.length);
  }

  get_cart_value(): Observable<number> {
    return this.cart_value$.asObservable();
  }
  get cart_array()
  {
    return this.cart_value
  }

  get remove_cart_value() {
    this.cart_value.pop();
    this.cart_value$.next(this.cart_value.length);
    return this.cart_value
  }
}