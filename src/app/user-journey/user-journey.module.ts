import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FileComponent } from './file/file.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AcceptConditionComponent } from './accept-condition/accept-condition.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WeatherComponent } from './weather/weather.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PersonalInformationComponent,
    SideBarComponent,
    FileComponent,
    AcceptConditionComponent,
    SuccessPageComponent,
    HomeComponent,
    ProfileComponent,
    WeatherComponent,
  ],
  imports: [
    CommonModule,    
    ReactiveFormsModule,
    NgbModule,
    SharedModule
  ],
  exports : [
    HomeComponent
  ]
})
export class UserJourneyModule { }
