import { Component, Type } from "@angular/core";
import { AcceptConditionComponent } from "../user-journey/accept-condition/accept-condition.component";
import { FileComponent } from "../user-journey/file/file.component";
import { PersonalInformationComponent } from "../user-journey/personal-information/personal-information.component";
import { SuccessPageComponent } from "../user-journey/success-page/success-page.component";

export class CurrentPage {
   
    id!: number;
    name!: string;
    Component!: Type<any>;
    pageNo!: number;
  }
  
 

  
