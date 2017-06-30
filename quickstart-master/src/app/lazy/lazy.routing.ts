import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';

const route : Routes =[
	{path :'', component : LazyComponent}
]


export const routing =RouterModule.forChild(route)




