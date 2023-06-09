import { Component } from '@angular/core';
import { FileSaverService } from 'src/app/service/saveFiles.service';
import { weatherData } from 'src/app/Model/weatherData';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  constructor(private WeatherApi: FileSaverService){}

  
  data : weatherData []=[];
  ngOnInit(): void {
    this.WeatherApi.getWeatherReport().subscribe(res=>{
      this.data=res
    })
  }
}
