import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { ContactManagerComponent } from './Component/contact-manager/contact-manager.component';
import { AddContactComponent } from './Component/add-contact/add-contact.component';
import { EditContactComponent } from './Component/edit-contact/edit-contact.component';
import { ViewContactComponent } from './Component/view-contact/view-contact.component';
import { SpinnerComponent } from './Component/spinner/spinner.component';
import { PageNotFoundComponent } from './Component/page-not-found/page-not-found.component';
import{HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactManagerComponent,
    AddContactComponent,
    EditContactComponent,
    ViewContactComponent,
    SpinnerComponent,
    PageNotFoundComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
