import { Component } from '@angular/core';
import { ProductService } from './product/product.service';

@Component({
  selector: 'my-app',
  templateUrl: `app/app.component.html`,
})
export class AppComponent  { 
	
	constructor(private productService : ProductService){}

	increase(){
		this.productService.counter++
	}



	name = "TypeScript!!!";

	products = [{
		id : 1,
		name :"iPhone"
	},{
		id : 2,
		name :"Samsung"
	},{
		id : 3,
		name :"Motorola"
	}]
}



