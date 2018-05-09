import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather_data = {};

  constructor(private _httpservice: HttpService) { }

  ngOnInit() {
    this.getWeatherData();
  }
  getWeatherData() {
    let observable = this._httpservice.getWeather(5331836);
    observable.subscribe(data => this.weather_data = data);
  }

}
