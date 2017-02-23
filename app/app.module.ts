import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { ItemComponent } from './item.component';

import { ItemService }   from './item.service';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, ItemComponent ],
  providers: [ItemService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
