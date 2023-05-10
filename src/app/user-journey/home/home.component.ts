import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Page } from 'src/app/service/const';
import { enviroment } from 'src/environment/environment';
import { AcceptConditionComponent } from '../accept-condition/accept-condition.component';
import { FileComponent } from '../file/file.component';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';
import { SuccessPageComponent } from '../success-page/success-page.component';
import { CurrentPage } from 'src/app/Model/CurrentPage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
 
  currentPage!: any;
  Page = Page;

  
  constructor(private authService:MsalService) {}

  ngOnInit(): void {
    this.currentPage = Page[0];
  }

  logOut()
  {
    this.authService.logoutRedirect({postLogoutRedirectUri:enviroment.postLogoutUrl});
  }
}