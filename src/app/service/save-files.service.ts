import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { enviroment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class FileSaverService {

  private files = new BehaviorSubject<any>([]);
  attachedFiles = this.files.asObservable();

  addFiles(newFiles: any){
    this.files.next(newFiles)
  }

  
  private submitDisable = new BehaviorSubject<boolean>(false);

  nextPageValidation = this.submitDisable.asObservable();

  constructor(private http:HttpClient) {}

 

  nextPageAble(value:boolean){
    this.submitDisable.next(value);
  }


  userurl= enviroment.apiUrl+'userDetails' // 'http://localhost:3000/userDetails';

  addNewUser(details:any):Observable<any>
  {
    return this.http.post(this.userurl,details);
  }
  GetUsers():Observable<any>
  {
    return this.http.get(this.userurl);
  }
  updateUserDetails(data:any):Observable<any>{
    return this.http.post(this.userurl,data)
  }
}
