import { NgModule } from '@angular/core';
import { RouterModule, Routes, withEnabledBlockingInitialNavigation } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { HomeComponent } from './user-journey/home/home.component';
import { WeatherComponent } from './user-journey/weather/weather.component';

const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate: [MsalGuard]},
  {path:'weather', component:WeatherComponent,canActivate:[MsalGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {initialNavigation:'enabledBlocking'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
