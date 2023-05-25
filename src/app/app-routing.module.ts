import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './users-journey/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
 // { path: 'main', component: MainComponent },
  //{ path: '', component: MainComponent, pathMatch: 'full' },
  {
    path: 'main/admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  }, //lazyLoading
  {
    path: 'userClaim',
    loadChildren: () =>
      import('./users-journey/users-journey.module').then((m) => m.UsersJourneyModule),
  },
  { path: '**', component: NotFoundComponent }, //if no path match it will got to not found component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
