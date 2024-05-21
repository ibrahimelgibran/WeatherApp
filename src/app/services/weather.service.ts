import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface CurrentWeatherData {
  main: {
    temp: number;
  };
  name: string;
  weather: {
    icon: string;
    main: string;
    description: string;
  }[];
}

interface ForecastWeatherData {
  // Struktur data untuk prakiraan cuaca
  list: {
    main: {
      temp: number;
    };
    weather: {
      icon: string;
      main: string;
      description: string;
    }[];
    dt_txt: string;
  }[];
  city: {
    name: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  private key = '8ebd1fbacfde54fc102f037d2b0522b7';
  private city = 'Sleman';

  constructor(private http: HttpClient) {}

  getCurrentWeather(): Observable<CurrentWeatherData> {
    return this.http.get<CurrentWeatherData>(
      `${this.currentWeatherUrl}?q=${this.city}&appid=${this.key}&units=metric`
    );
  }

  getForecast(): Observable<ForecastWeatherData> {
    return this.http.get<ForecastWeatherData>(
      `${this.forecastUrl}?q=${this.city}&appid=${this.key}&units=metric`
    );
  }
}
