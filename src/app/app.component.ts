import { Component, Inject, InjectionToken, OnDestroy, OnInit, inject } from '@angular/core';
import { AuthenticationResult, InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import {MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { Subject, filter, takeUntil } from 'rxjs';
import { enviroment } from 'src/environment/environment';
import { AzureADService } from './service/azure-ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy{
  title = 'Progress';

  isLoggedIn:boolean = false;

  private readonly destory = new Subject<void>();
  constructor(@Inject(MSAL_GUARD_CONFIG) private msalGuardConfig:MsalGuardConfiguration,
  private msalBroadCastService:MsalBroadcastService, private authService:MsalService,private azureAd:AzureADService,
 
  ){}


  ngOnDestroy(): void {
    this.destory.next(undefined);
    this.destory.complete();    
  }

  ngOnInit(): void {
    this.msalBroadCastService.inProgress$.pipe(
      filter((interactionStatus:InteractionStatus)=>
      interactionStatus == InteractionStatus.None), takeUntil(this.destory)).subscribe(
        x=>{
          this.isLoggedIn=this.authService.instance.getAllAccounts().length>0;
          this.azureAd.isUserLoggedIn.next(this.isLoggedIn);
        }
      )   
  }
  login()
  {
    if(this.msalGuardConfig.authRequest)
    {
      this.authService.loginRedirect({...this.msalGuardConfig.authRequest} as RedirectRequest)
      
    }
    else{
      this.authService.loginRedirect();
    }
  }
  logOut()
  {
    this.authService.logoutRedirect({postLogoutRedirectUri:enviroment.postLogoutUrl});
  }
}
