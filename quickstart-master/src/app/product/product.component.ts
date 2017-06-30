import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'product-comp',
  template: `<h1>Product Component Loaded Successfully!!!</h1>

  	<button class="btn btn-default" (click)="increase()">Increase</button>
  	<p>Counter Value in Product Comp :: {{productService.counter}}</p>

  `,
 
})
export class ProductComponent  {
	constructor(private productService : ProductService){}

	increase(){
		this.productService.counter++
	}
}



