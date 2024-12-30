import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { LibraryComponent } from './library/library.component';
import { ReaderComponent } from './reader/reader.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CardComponent,
    ContactComponent,
    LibraryComponent,
    ReaderComponent,
    ReaderComponent,
    ProductComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
    
  ],
  providers: [LibraryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
