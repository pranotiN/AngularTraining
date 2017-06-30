import { Component, EventEmitter } from '@angular/core';

@Component({
	selector : 'child-comp',
  templateUrl: `app/child.component.html`,
  inputs : ['parentValue'],
  outputs : ['childChange']
})
export class ChildComponent  { 

	childChange = new EventEmitter();

	onChange(value : string){
		this.childChange.emit(value);
	}
}



