import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './users-journey/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainComponent } from './Components/main/main.component';

const routes: Routes = [
  //  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  {path:'main', component:MainComponent},
  { path: '', component: MainComponent, pathMatch: 'full' },
  {
    path: 'main/admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  }, //lazyLoading
  {
    path: 'GG',
    loadChildren: () =>
      import('./users-journey/users-journey.module').then(
        (m) => m.UsersJourneyModule
      ),
  },
  { path: '**', component: NotFoundComponent }, //if no path match it will got to not found component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
