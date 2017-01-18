import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
/* Feature Modules */
import { AdminModule }    from './admin/admin.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
