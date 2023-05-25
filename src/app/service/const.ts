import { AcceptConditionComponent } from "../users-journey/accept-condition/accept-condition.component";
import { FileComponent } from "../users-journey/file/file.component";
import { PersonalInformationComponent } from "../users-journey/personal-information/personal-information.component";
import { SuccessPageComponent } from "../users-journey/success-page/success-page.component";

export const Page: any[] = [
  { id: 3, name: 'File', Component: FileComponent, pageNo: 1 },
  { id: 2, name: 'PersonalInformation', Component: PersonalInformationComponent, pageNo: 2 },
  { id: 1, name: 'AcceptTermsandCondition', Component: AcceptConditionComponent, pageNo: 3 },
  { id: 4, name: 'Success', Component: SuccessPageComponent, pageNo: 4 }
];



export const languages = [
  { label: 'English', value: 'en' },
  { label: 'France', value: 'fr' },
  { label: 'Marathi', value: 'mr' },
  { label: 'Turkish', value: 'tr' }
]

