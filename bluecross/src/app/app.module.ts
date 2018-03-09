import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { EmailModule }  from './email/email.module';
import { PhoneModule }  from './phone/phone.module';
import { routing }  from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    EmailModule,
    PhoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
