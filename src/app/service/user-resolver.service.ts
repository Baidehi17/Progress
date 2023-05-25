import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { userDetails } from '../model/userDetails';
import { Observable } from 'rxjs';
import { FileSaverService } from './save-files.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<userDetails>{

  constructor(private userdetails:FileSaverService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): userDetails | Observable<userDetails> | Promise<userDetails> {
    return this.userdetails.GetUsers();
  }
}