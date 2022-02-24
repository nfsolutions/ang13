import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {NgbdDatepickerAdapter} from "./components/datepicker-adapter/datepicker-adapter";
import {AppRoutingModule} from "../app-routing.module";


@NgModule({
  declarations: [
    NgbdDatepickerAdapter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  exports: [
    NgbdDatepickerAdapter
  ]
})
export class SharedModule {
}
