import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountrydetailComponent } from './Components/countrydetail/countrydetail.component';
import { CountrylistComponent } from './Components/countrylist/countrylist.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainpageComponent } from './Components/mainpage/mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    CountrydetailComponent,
    CountrylistComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
