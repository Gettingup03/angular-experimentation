import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryBooksBookComponent } from './library-books-book.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LibraryBooksBookComponent],
  exports: [LibraryBooksBookComponent]
})
export class LibraryBooksBookModule { }
