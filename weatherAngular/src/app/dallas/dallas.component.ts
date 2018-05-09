import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather_data = {};

  constructor(private _httpservice: HttpService) { }

  ngOnInit() {
    this.getWeatherData();
  }
  getWeatherData() {
    let observable = this._httpservice.getWeather(4684888);
    observable.subscribe(data => this.weather_data = data);
  }

}
