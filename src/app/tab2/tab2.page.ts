import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  whList: any[] = [];
  constructor(private router: Router) {}

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

    this.router.navigate(['/detail'], extras);
  }
}
