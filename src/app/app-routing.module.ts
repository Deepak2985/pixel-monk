import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
path:'',
redirectTo:'/home',
pathMatch:'full'
  },
  {
  path:'home',
  component:HomeComponent
  },
  {
    path:'contactus',
    component:ContactUsComponent
    },
    {
      path:'ourwork',
      component:OurWorkComponent
      },
      {
        path:'about',
        component:AboutUsComponent
        }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
