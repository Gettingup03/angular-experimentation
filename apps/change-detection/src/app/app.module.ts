import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroeModule } from './heroe/heroe.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
