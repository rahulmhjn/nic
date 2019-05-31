import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { FaqComponent } from './faq/faq.component';
import { SignupComponent } from './signup/signup.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewComponent } from './new/new.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'services',component:ServicesComponent},
  {path: 'faq', component:FaqComponent},
  {path: 'gallery', component:GalleryComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'new', component: NewComponent},
  {path: 'login',component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
