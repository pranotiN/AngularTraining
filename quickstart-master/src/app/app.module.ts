import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductModule } from './product/product.module';

import { AppComponent }  from './app.component';
import { UserComponent } from './user.component';
import { ContactComponent } from './contact.component';
import { PageNotFoundComponent } from './pagenotfound.component';
import { YourComponent } from './your.component';
import { AboutComponent } from './about.component';
import { PersonalComponent } from './personal.component';
import { ProfessionalComponent } from './professional.component';
import { TemplateFormComponent } from './templateform.component';
import { ReactiveFormComponent } from './reactiveform.component';
import { ChildComponent } from './child.component';

import { StyleDirective } from './style.directive';
import { APP_ROUTES } from './app.routes';
import { DoubleMePipe } from './double.pipe';
import { UserService } from './user.service';
import { LoginService } from './login.service';
import { ProductService } from './product/product.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,
  				  HttpModule, RouterModule.forRoot(APP_ROUTES), 
  				  ProductModule], 
  declarations: [ AppComponent, YourComponent, 
  				  UserComponent, DoubleMePipe, PageNotFoundComponent,
  				  ContactComponent, AboutComponent, PersonalComponent,
  				  ProfessionalComponent, TemplateFormComponent, 
  				  ReactiveFormComponent, ChildComponent, StyleDirective],
  providers :	[ UserService, LoginService, ProductService ],
  bootstrap:    [ AppComponent ]	
})
export class AppModule { }



