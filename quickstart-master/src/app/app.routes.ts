import { Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { YourComponent } from './your.component';
import { PersonalComponent } from './personal.component';
import { ProfessionalComponent } from './professional.component';
import { TemplateFormComponent } from './templateform.component';
import { ReactiveFormComponent } from './reactiveform.component';

import { LoginService } from './login.service';

export const APP_ROUTES : Routes = [
	{path : '', component : UserComponent},
	{path : 'about', component : AboutComponent },
	{path : 'contact', component : ContactComponent},
	{path : 'template', component : TemplateFormComponent},
	{path : 'reactive', component : ReactiveFormComponent},
	{path : 'lazy', loadChildren : 'app/lazy/lazy.module#LazyModule'},
	{path : 'yours/:id', component : YourComponent, 
	children : [
		{path : 'personal', component : PersonalComponent, 
			canActivate : [LoginService]},
		{path : 'professional', component : ProfessionalComponent}
		
	]},
	{path : '**', component : PageNotFoundComponent}

]