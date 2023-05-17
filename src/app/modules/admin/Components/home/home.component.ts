import { Component, OnInit } from '@angular/core';
import { userDetails } from 'src/app/Model/userDetails';
import { FileSaverService } from 'src/app/service/save-files.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
 
 constructor(private getUsers:FileSaverService){}

 userdetails:userDetails[] =[];
  ngOnInit(): void {
    this.getUsers.GetUsers().subscribe(
      res=>{
        this.userdetails = res
        console.log(this.userdetails)
      }
    )
  }


}
