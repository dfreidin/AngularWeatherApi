import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
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
