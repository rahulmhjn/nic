import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { FaqComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewComponent } from './new/new.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QweComponent } from './qwe/qwe.component';
import { Form1Component } from './form1/form1.component';


const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:"full"},
  {path: 'home', component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'services',component:ServicesComponent},
  {path: 'faq', component:FaqComponent},
  {path: 'gallery', component:GalleryComponent},
  {path: 'new', component: NewComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'qwe', component:QweComponent},
  {path: 'form1/:id1',component: Form1Component},
  { path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
