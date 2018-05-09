import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather_data = {};

  constructor(private _httpservice: HttpService) { }

  ngOnInit() {
    this.getWeatherData();
  }
  getWeatherData() {
    let observable = this._httpservice.getWeather(5809844);
    observable.subscribe(data => this.weather_data = data);
  }

}
