import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms'; 

@Component({
  templateUrl: `app/reactiveform.component.html`,
})
export class ReactiveFormComponent  { 

	hasExclamation(input : FormControl){
		const hasExclamation = input.value.indexOf('!')>=0;
		return hasExclamation ? null : {needExclamation : true};
	}

	username  = new FormControl('',[
		Validators.required
		]);

	password = new FormControl('', [
			Validators.required, 
			Validators.minLength(5),
			this.hasExclamation
			]);

	usernameValue : string;
	constructor(private builder : FormBuilder){}

	loginForm : FormGroup = this.builder.group({
		username : this.username,
		password : this.password
	});

	submitForm(){
		console.log(this.loginForm.value);
		
	}

}



