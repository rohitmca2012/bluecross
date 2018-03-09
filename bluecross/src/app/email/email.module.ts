import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmailComponent } from './email.component';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    EmailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],

})
export class EmailModule { }
