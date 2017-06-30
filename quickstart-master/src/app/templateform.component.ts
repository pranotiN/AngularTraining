import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
	templateUrl : 'app/templateform.component.html',
	styleUrls : ['app/templateform.component.css']
})
export class TemplateFormComponent{

	submitForm(loginForm  :NgForm){
		console.log(loginForm.value);
	}

}