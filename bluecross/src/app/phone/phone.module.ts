import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PhoneComponent } from './phone.component';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
})
export class PhoneModule { }
