import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  //API key from Website, two variables for api key
  apiKey = 'fab33af1eef90798';
  url;

  constructor(public http: HttpClient) {
    console.log('API Data confirmed');
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }

  //Takes in City + State returns using http module get(url above + state + city and finally .json
  getWeather(city, state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
  }
}
