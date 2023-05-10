import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as Msal from 'msal'; 
@Injectable({
  providedIn: 'root'
})
export class MsalTokenService {
  private accessToken: any;  

  public clientApplication: Msal.UserAgentApplication;  
 
  constructor() {  
    this.clientApplication = new Msal.UserAgentApplication({  
        auth: {  
            clientId: 'daac6edd-0453-4ff9-9790-bdee2f241579',   
            authority: 'https://login.microsoftonline.com/865cc515-a530-4538-8ef8-072b7b2be759' ,  
            redirectUri: 'https://localhost:4200',  
        },  
        cache: {  
            cacheLocation: 'localStorage',  
            //storeAuthStateInCookie: true  
        }  
    });  
}


  public GetAccessToken(): Observable<any> {  
      if (localStorage.getItem('msal.idtoken') !== undefined && localStorage.getItem('msal.idtoken') != null) {  
          this.accessToken = localStorage.getItem('msal.idtoken');  
      }  
      console.log(this.accessToken)
      return this.accessToken;  
  }  

  public authCallback(errorDesc: string, token: any, error: string, tokenType: any) {  
      if (token) {  

      } else {  
          console.log(error + ':' + errorDesc);  
      }  
  }  

  // public getCurrentUserInfo() {  
  //     const user = this.clientApplication.;  
  //     alert(user.name);  
  // }  

  public logout() {  
      this.clientApplication.logout();  
    }  
}
