import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FileComponent } from './file/file.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AcceptConditionComponent } from './accept-condition/accept-condition.component';
import { WarningPopupComponent } from './warning-popup/warning-popup.component';
import { DragDropDirective } from '../Directive/drag-drop.directive';
import { SuccessPageComponent } from './success-page/success-page.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [
    ProgressBarComponent,
    PersonalInformationComponent,
    SideBarComponent,
    FileComponent,
    AcceptConditionComponent,
    WarningPopupComponent,
    DragDropDirective,
    SuccessPageComponent,
    HomeComponent,
    ProfileComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,    
    ReactiveFormsModule,
    NgbModule
  ],
  exports : [
    ProgressBarComponent,
    WeatherComponent,
    HomeComponent
  ]
})
export class UserJourneyModule { }
