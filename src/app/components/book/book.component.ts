import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IBook } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  datum: Date = new Date();
   // @ts-ignore
  ngbDateStruct = { day: this.datum.getUTCDay(), month: this.datum.getUTCMonth(), year: this.datum.getUTCFullYear()};
  book: IBook = { name: '', author: '', genre: '', price: 0, dateBought: this.ngbDateStruct };

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.bookService.addBook(form.value).
    then(() => form.reset());
  }


}
