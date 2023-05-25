import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersJourneyRoutingModule } from './users-journey-routing.module';
import { HomeComponent } from './home/home.component';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { AcceptConditionComponent } from './accept-condition/accept-condition.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { FileComponent } from './file/file.component';
import { FormInteractionService } from '../service/form-interaction.service';
import { HeaderComponent } from './header/header.component';
import { TRANSLOCO_CONFIG, TranslocoConfig, TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [
    HomeComponent,
    PersonalInformationComponent,
    AcceptConditionComponent,
    SideBarComponent,
    SuccessPageComponent,
    FileComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UsersJourneyRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    NgbProgressbarModule,
    TranslocoModule
  ],
  exports : [
    HomeComponent
  ],
  providers: [FormInteractionService]
})
export class UsersJourneyModule { }
