import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FileComponent } from './file/file.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AcceptConditionComponent } from './accept-condition/accept-condition.component';
import { DragDropDirective } from '../Directive/drag-drop.directive';
import { SuccessPageComponent } from './success-page/success-page.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WeatherComponent } from './weather/weather.component';
import { DragDropFileComponent } from './drag-drop-file/drag-drop-file.component';
import { BrowseFileComponent } from './browse-file/browse-file.component';


@NgModule({
  declarations: [
    ProgressBarComponent,
    PersonalInformationComponent,
    SideBarComponent,
    FileComponent,
    AcceptConditionComponent,
    DragDropDirective,
    SuccessPageComponent,
    HomeComponent,
    ProfileComponent,
    WeatherComponent,
    DragDropFileComponent,
    BrowseFileComponent
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
