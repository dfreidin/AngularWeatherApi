import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  weather_data = {};

  constructor(private _httpservice: HttpService) { }

  ngOnInit() {
    this.getWeatherData();
  }
  getWeatherData() {
    let observable = this._httpservice.getWeather(5392171);
    observable.subscribe(data => this.weather_data = data);
  }

}
