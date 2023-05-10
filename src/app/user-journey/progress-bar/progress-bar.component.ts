import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AzureADService } from 'src/app/service/azure-ad.service';
import { enviroment } from 'src/environment/environment';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit{

  nextPage:any =false;
  showFile:boolean= false;


  constructor(private authService:MsalService)
  {
    this.nextPage = false
    console.log(this.nextPage)
   }
  ngOnInit(): void {
    
    this.PreviousPage;
  }
 
  getPageProgress(){
    if (!this.nextPage) {
      return 0;
    } else if (this.nextPage ==1) {
      return 20;
    } else if(this.nextPage ==2){
      return 50;
    }
    else{
      return 100;
    }    
  }
  PreviousPage(){          
  if(this.nextPage!=null)
  {
    this.nextPage --;
  }    
  }
  NextPage()
  {
    if(this.nextPage!=null)
    {
      this.nextPage ++;
    } 
    
  }
  logOut()
  {
    this.authService.logoutRedirect({postLogoutRedirectUri:enviroment.postLogoutUrl});
  }
}
