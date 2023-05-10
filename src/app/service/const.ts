import { AcceptConditionComponent } from "../user-journey/accept-condition/accept-condition.component";
import { FileComponent } from "../user-journey/file/file.component";
import { PersonalInformationComponent } from "../user-journey/personal-information/personal-information.component";
import { SuccessPageComponent } from "../user-journey/success-page/success-page.component";


    export const Page : any=[
    {id:1 , name:'Accept Terms and Condition', component:AcceptConditionComponent, pageNo:1 },
    {id:2, name:'PersonalInformation', component:PersonalInformationComponent, pageNo:2},
    {id:3, name:'File', component:FileComponent, pageNo:3},
    {id:4, name:'Success', component:SuccessPageComponent, pageNo:4}
  ]

  
  