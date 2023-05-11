import { AcceptConditionComponent } from "../user-journey/accept-condition/accept-condition.component";
import { FileComponent } from "../user-journey/file/file.component";
import { PersonalInformationComponent } from "../user-journey/personal-information/personal-information.component";
import { SuccessPageComponent } from "../user-journey/success-page/success-page.component";

export const Page : any[]= [
    {id: 1, name: 'AcceptTermsandCondition', Component: AcceptConditionComponent, pageNo: 1},
    {id: 2, name: 'PersonalInformation', Component: PersonalInformationComponent, pageNo: 2},
    {id: 3, name: 'File', Component: FileComponent, pageNo: 3},
    {id: 4, name: 'Success', Component: SuccessPageComponent, pageNo: 4}
  ];
    

  
  