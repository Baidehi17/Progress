import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FileComponent } from './file/file.component';
import { AcceptConditionComponent } from './accept-condition/accept-condition.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { SuccessPageComponent } from './success-page/success-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent, children:[
    {path:'file', component:FileComponent},
    {path:'acceptCondition', component:AcceptConditionComponent},
    {path:'information', component:PersonalInformationComponent},
    {path:'success', component: SuccessPageComponent},
    {path:'home', component: HomeComponent},
    {path:'', redirectTo:'GG/home', pathMatch:'full'}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersJourneyRoutingModule { }
