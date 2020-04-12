import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../model/book';

@Component({
  selector: 'app-library-books',
  templateUrl: './library-books.component.html',
  styleUrls: ['./library-books.component.css']
})
export class LibraryBooksComponent implements OnInit {
  @Input() books: Book[];

  constructor() {}

  ngOnInit() {}
}
