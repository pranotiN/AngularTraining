import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class LoginService implements CanActivate{
	canActivate(){
		return false;
	}
}
