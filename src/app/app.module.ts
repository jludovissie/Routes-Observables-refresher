import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BobComponent } from './about/bob/bob.component';
import { SusanComponent } from './about/susan/susan.component';
import { RedirectComponent } from './redirect/redirect.component';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule ,
                  AppRoutingModule],

  declarations: [ AppComponent, 
                  HelloComponent, 
                  UsersComponent,
                  HomeComponent,
                  AboutComponent,
                  ContactComponent,
                  NavbarComponent,
                  BobComponent,
                  SusanComponent,
                  RedirectComponent ],
                  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
