import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { enviroment } from 'src/environment/environment';
import { AcceptConditionComponent } from '../accept-condition/accept-condition.component';
import { FileComponent } from '../file/file.component';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';
import { SuccessPageComponent } from '../success-page/success-page.component';
import { CurrentPage } from 'src/app/Model/CurrentPage';
import { Page } from 'src/app/service/const';
import { find, findIndex } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
 
  currentPage!: CurrentPage;
  Page = Page;
  
  constructor(private authService:MsalService) {}

  ngOnInit(): void {
    this.currentPage=Page[0]
  }

  logOut()
  {
    this.authService.logoutRedirect({postLogoutRedirectUri:enviroment.postLogoutUrl});
  }
  previousPage() {
    const prevPageNo = this.currentPage.pageNo - 1;
    this.currentPage = this.Page.find(page => page.pageNo === prevPageNo);
  }
  
  nextPage() {
    const nextPageNo = this.currentPage.pageNo + 1;
    this.currentPage = this.Page.find(page => page.pageNo === nextPageNo);
  }

}