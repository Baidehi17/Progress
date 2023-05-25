import { Component, OnInit } from '@angular/core';
import { enviroment } from 'src/environment/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Progress';
  ngOnInit() {
   
  }
}
