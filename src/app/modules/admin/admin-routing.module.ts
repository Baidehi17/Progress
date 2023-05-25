import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { ContactComponent } from './Components/contact/contact.component';
import { UserResolverService } from 'src/app/service/user-resolver.service';

const routes: Routes = [{
  path: '', component: AdminDashboardComponent, children: [
    {
      path: 'home', component: HomeComponent,
      resolve :{
        userDetail : UserResolverService
      }
    },
    { path: 'about', component: AboutComponent },
    { path: 'service', component: ServicesComponent },
    { path: 'contact', component: ContactComponent }
    // {path:'', redirectTo:'/admin/home', pathMatch:'full'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
