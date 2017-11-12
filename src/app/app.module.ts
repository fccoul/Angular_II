import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
// AppComponent a le meme nom de la classe au niveau du composant app.component.ts

// @NgModule decorator Angular that the code following this decorator is a module.
@NgModule({
  declarations: [
    // iic c'est un tableau qui is an array of all components that will reside in this module.
    AppComponent // meme nom que le composant
  ],
  imports: [
    /* is an array of other modules and content this module requires. Here,
    we import a built-in module called BrowserModule.
    ici on imports other pieces of our application we want included in this module.
    */
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]// array of components required immediately upon launching the application.
})
export class AppModule { }
