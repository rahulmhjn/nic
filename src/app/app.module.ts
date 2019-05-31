import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { FaqComponent } from './faq/faq.component';
import { SignupComponent } from './signup/signup.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewComponent } from './new/new.component';
import { LoginComponent } from './login/login.component';

let config = {
  apiKey: "AIzaSyA_hBJk_nkDBLsnCh3UuvwFDm4_6HqFHqI",
  authDomain: "cloud-nic.firebaseapp.com",
  databaseURL: "https://cloud-nic.firebaseio.com",
  projectId: "cloud-nic",
  storageBucket: "cloud-nic.appspot.com",
  messagingSenderId: "699816782053",
  appId: "1:699816782053:web:5cd82cbb1fad0a03"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    FaqComponent,
    SignupComponent,
    GalleryComponent,
    NewComponent,
    LoginComponent
  ],
  imports: [
    NgbModule,
    NgbAlertModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
