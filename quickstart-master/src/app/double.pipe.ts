import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name :'doubleMe'})
export class DoubleMePipe implements PipeTransform{
	transform( value : any) : any {
		return value + 2;
	}
}