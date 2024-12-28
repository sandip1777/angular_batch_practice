import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { LibraryComponent } from './library/library.component';
import { ReaderComponent } from './reader/reader.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CardComponent,
    ContactComponent,
    LibraryComponent,
    ReaderComponent,
    ReaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LibraryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
