import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  showLoadingIndicater = true;
  
  constructor(private route:Router)
  {
    this.route.events.subscribe((routerEvent : Event)=>
    {
      if(routerEvent instanceof NavigationStart){
        this.showLoadingIndicater=true;
      }
      if(routerEvent instanceof NavigationEnd){        
        this.showLoadingIndicater=false;
      }
    })
  }
}
