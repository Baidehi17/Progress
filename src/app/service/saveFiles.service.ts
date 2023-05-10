import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { MsalTokenService } from './msal-token.service';

@Injectable({
  providedIn: 'root'
})
export class FileSaverService {

  private files = new BehaviorSubject<any>([]);
  attachedFiles = this.files.asObservable();
  constructor(private http:HttpClient, private msalService:MsalTokenService) {}

  addFiles(newFiles: any){
    this.files.next(newFiles)
  }



  url='https://localhost:7031/WeatherForecast';

  
  httpOptions = {  
    headers: new HttpHeaders({  
        'Content-Type': 'application/json'  
    })  
}; 
  getWeatherReport():Observable<any>
  {
    this.httpOptions = {  
      headers: new HttpHeaders({  
          'Content-Type': 'application/json',  
          'Authorization': 'Bearer ' + this.msalService.GetAccessToken()  
      })  

  };  
  return this.http.get(this.url, this.httpOptions)  
          .pipe((response: any) => {  
            console.log(response);
              return response;

          });  
    return this.http.get<any>(this.url);
  }
}
