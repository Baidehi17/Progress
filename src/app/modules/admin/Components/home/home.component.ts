import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userDetails } from 'src/app/model/userDetails';
import { FileSaverService } from 'src/app/service/save-files.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
 
 constructor(private route:ActivatedRoute){  
  setTimeout(() => {
    this.userdetails = this.route.snapshot.data['userDetail']
  }, 5000);
  
 }

 userdetails:userDetails[] =[];
  ngOnInit(): void {
  
  }
}
