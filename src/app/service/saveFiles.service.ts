import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class FileSaverService {

  private files = new BehaviorSubject<any>([]);

  attachedFiles = this.files.asObservable();

  constructor(private http:HttpClient) {}

  addFiles(newFiles: any){
    this.files.next(newFiles)
  }


  userurl='http://localhost:3000/userDetails';

  addNewUser(details:any):Observable<any>
  {
    return this.http.post(this.userurl,details);
  }
}
