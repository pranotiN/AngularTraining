import  { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class UserService {
	counter = 0;
	users : User[];

	constructor(private http : Http){}

	getUserData(){
		return this.http.get('app/user-data.json')
				.map(response=><User[]>response.json().data);		
	}
} 