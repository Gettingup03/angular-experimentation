import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryBooksComponent } from './library-books.component';
import { LibraryBooksBookModule } from './library-books-book/library-books-book.module';

@NgModule({
  imports: [
    CommonModule, LibraryBooksBookModule
  ],
  declarations: [LibraryBooksComponent],
  exports: [LibraryBooksComponent]
})
export class LibraryBooksModule { }
