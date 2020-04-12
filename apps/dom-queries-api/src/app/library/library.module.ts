import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { LibraryBooksModule } from './library-books/library-books.module';

@NgModule({
  imports: [
    CommonModule, LibraryBooksModule
  ],
  declarations: [LibraryComponent], 
  exports: [LibraryComponent]
})
export class LibraryModule { }
