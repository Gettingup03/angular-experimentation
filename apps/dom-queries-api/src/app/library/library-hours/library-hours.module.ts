import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryHoursComponent } from './library-hours.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LibraryHoursComponent],
  exports: [LibraryHoursComponent]
})
export class LibraryHoursModule { }
