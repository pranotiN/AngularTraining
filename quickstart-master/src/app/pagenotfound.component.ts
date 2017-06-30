import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `<h1>Nothing to show here...</h1>
  	<button class="badge" (click) = "gotoHome()">Go to Home</button>
  ` 
})
export class PageNotFoundComponent  { 

constructor(private route : Router){}
	gotoHome(){
		this.route.navigate(['/']);
	}
}



