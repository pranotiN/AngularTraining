import { Component , Input} from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';


@Component({
	selector : 'user-comp',
	templateUrl : `app/user.component.html`,
	styleUrls : [`app/user.component.css`]
})

 export class UserComponent{
 	@Input() name : string;

 	data : any;
	bool : boolean = false;
	users : User[];
	color  = 'red';

 	constructor(private userService : UserService){ 		
 		this.data = new Promise((resolve, reject)=>{
 			setTimeout(()=>{resolve(500)}, 2000 )
 		})
 	}

	increase(){
		this.userService.counter++;
	}

	ngOnInit(){
		this.userService.getUserData()	
				.subscribe(xyz=>this.users = xyz);
	}

 	moreInfo(user : User){
 		alert(user.firstName + " is working with " + user.company );
 	}

 	totalIncome(){
 		let totIncome=0 ;
 		if(Array.isArray(this.users)){
	 		for(let user of this.users){
	 			totIncome += user.income;
	 		}
 		}
 		return totIncome;
 	}

 	classBinding={
 		feature : true,
 		working : this.bool
 	}

 	styleProperty =  {
 		color : this.color
 	}

}