import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getWeather(city_id: number) {
    console.log(`requesting: http://api.openweathermap.org/data/2.5/weather?id=${city_id}&units=imperial&appid=9a0815afe90785f1291af9a62f57c80e`)
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?id=${city_id}&units=imperial&appid=9a0815afe90785f1291af9a62f57c80e`);
  }
}
