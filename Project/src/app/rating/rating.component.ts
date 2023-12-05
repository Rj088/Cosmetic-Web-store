import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
 ngOnChanges(changes: SimpleChanges): void {
 console.log(this.rating);
this.outer_width=this.rating*this.outer_width;
  console.log(this.outer_width)
   }
    
    @Input() rating:number=0;
    outer_width:number=16;

    }

