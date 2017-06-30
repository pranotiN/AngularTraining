import { Component } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	templateUrl : `app/your.component.html`
})

 export class YourComponent{

 	id : number;

	constructor(private userService : UserService,
 		private route : ActivatedRoute){ 	
			route.params.subscribe((params)=>{
				this.id = +params['id'];
			})
	}



 	increase(){
 		this.userService.counter++;
 	}

 }