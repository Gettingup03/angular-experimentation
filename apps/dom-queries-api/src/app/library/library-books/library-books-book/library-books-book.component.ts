import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../../model/book';

@Component({
  selector: 'app-library-books-book',
  templateUrl: './library-books-book.component.html',
  styleUrls: ['./library-books-book.component.css']
})
export class LibraryBooksBookComponent implements OnInit {
  @Input() book: Book;

  constructor() {}

  ngOnInit() {}
}
