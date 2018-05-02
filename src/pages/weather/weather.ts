import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  weather:any;
  location:{
    city:string,
    state:string
  }

  constructor(public navCtrl: NavController, private weatherProvider:WeatherProvider, private storage:Storage) {

  }

  //Starts when compenents loaded
  ionViewWillEnter(){
    this.storage.get('location').then((val) =>{
      if(val != null){
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'Miami',
          state: 'FL'
        }
      }

       //console.log(weather);
    this.weatherProvider.getWeather(this.location.city, this.location.state).subscribe(weather => {this.weather = weather.current_observation;});
    });

   
  }

}
