import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';

import {environment} from 'src/environments/environment';
import {FormsModule} from '@angular/forms';
import {BooksComponent} from "./components/books/books.component";
import {SearchComponent} from "./components/search/search.component";
import {HomeComponent} from "./components/home/home.component";
import {EditBookComponent} from "./modal/edit-book/edit-book.component";
import {BookComponent} from "./components/book/book.component";
import {SharedModule} from "./shared/shared.module";
import {NgChartsModule} from "ng2-charts";
import {BarChartComponent} from "./components/barchart/barchart.component";


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    HomeComponent,
    EditBookComponent,
    SearchComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    SharedModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
