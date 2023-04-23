import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import axios from 'axios';
import { getUserData } from '../store/selectors/app.selectors';
import { Subscription } from 'rxjs';
import env from '../../../env-variables.json'


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  private subscription: Subscription;
  user = {name:''};
  weather: any = {};
  location: string = '';

  constructor(private store: Store) {
    this.subscription = this.store.select(getUserData).subscribe((user) => {
      this.user = user
    });
  }
  
  getWeatherData(location: string) {
    axios.get(`http://api.weatherstack.com/current?access_key=${env.weatherStack}&query=${location}`)
      .then(response => {
        if(response.data.error){
          alert('Please enter valid location name!')
        }else{
          this.weather = response.data;
          console.log(this.weather)
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
