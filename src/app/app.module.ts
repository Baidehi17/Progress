import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserJourneyModule } from './user-journey/user-journey.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MSAL_INSTANCE, MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent, MsalService } from '@azure/msal-angular';
import { IPublicClientApplication, InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AzureADService } from './service/azure-ad.service';

// export function MSALInstance(): IPublicClientApplication{
//   return new PublicClientApplication(
//     {
//       auth:{
//         clientId : 'dc1fe254-a3ce-4592-817f-0e2d31d79b79',
//         redirectUri : 'http://localhost:4200'
//       }
//     }
//   )
// }


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UserJourneyModule,
    CommonModule,
    NgbModule,
    MsalModule.forRoot(new PublicClientApplication(
      {
        auth:{
          clientId: 'daac6edd-0453-4ff9-9790-bdee2f241579',
          redirectUri:'http://localhost:4200',      //once azure succesfully login then it will return the token in this url
          authority:'https://login.microsoftonline.com/865cc515-a530-4538-8ef8-072b7b2be759'
        },
        cache:
        {
          cacheLocation : 'localStorage', //store token in localstorage
          storeAuthStateInCookie : false
        }
      }
    ),
    {
      interactionType : InteractionType.Redirect,
      authRequest:{
        scopes:['user.read']
      }
    },
    {
      //protected recource
      interactionType : InteractionType.Redirect,
      protectedResourceMap: new Map(
        [
          ['https://graph.microsoft.com/v1.0/me',['user.Read']]
        ]
      )
    })
  ],
  providers: [
    // { provide: MSAL_INSTANCE,
    //           useFactory : MSALInstance},
    //         MsalService,

   {provide: HTTP_INTERCEPTORS,useClass:MsalInterceptor,multi:true}, 
   MsalGuard,AzureADService],    // use msalGuard for protect the url 
  bootstrap: [AppComponent,MsalRedirectComponent]
})
export class AppModule { }
