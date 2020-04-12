import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { LibraryBooksModule } from './library-books/library-books.module';
import { LibraryHoursModule } from './library-hours/library-hours.module';

@NgModule({
  imports: [
    CommonModule, LibraryBooksModule, LibraryHoursModule
  ],
  declarations: [LibraryComponent], 
  exports: [LibraryComponent]
})
export class LibraryModule { }
