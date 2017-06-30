import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector:'[style-me]'
})

export class StyleDirective{
	constructor(private el : ElementRef){
		el.nativeElement.style.backgroundColor = "red";
	}

}