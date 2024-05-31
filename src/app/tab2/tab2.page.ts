import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public forecast: any[] = [];

  constructor(private weatherService: WeatherService, private route: Router) {}

  ngOnInit(): void {
    this.weatherService.getForecast().subscribe((result) => {
      this.forecast = result.list;
      console.log(this.forecast);
    });
  }

  detailpage(w: any): void {
    let weather = {
      date: w.dt_txt,
      temp: w.main.temp,
      main: w.weather[0].main,
      desc: w.weather[0].description,
      icon: w.weather[0].icon,
    };
    let extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(weather),
      },
    };
    this.route.navigate(['/detail'], extras);
  }
}
