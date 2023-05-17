import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class FileSaverService {

  private files = new BehaviorSubject<any>([]);

  private submitDisable = new BehaviorSubject<boolean>(false);
  

  attachedFiles = this.files.asObservable();

  nextPageValidation = this.submitDisable.asObservable();

  constructor(private http:HttpClient) {}

  addFiles(newFiles: any){
    this.files.next(newFiles)
  }

  nextPageAble(value:boolean){
    this.submitDisable.next(value);
  }


  userurl='http://localhost:3000/userDetails';

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
