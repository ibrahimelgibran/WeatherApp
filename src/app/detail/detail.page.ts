import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  weather: any;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      console.log('Query Params:', params);
      if (params && params['special']) {
        console.log('Params.special:', params['special']);
        try {
          this.weather = JSON.parse(params['special']);
          console.log('Parsed weather:', this.weather);
        } catch (e) {
          console.error('Error parsing JSON', e);
        }
      } else {
        console.warn('Params.special is not available or not valid');
      }
    });
  }

  ngOnInit() {}

  save() {
    try {
      let existingFavs = JSON.parse(localStorage.getItem('fav') || '[]');
      existingFavs.push(this.weather);
      localStorage.setItem('fav', JSON.stringify(existingFavs));
      console.log('Weather saved to favorites:', this.weather);
    } catch (e) {
      console.error('Error saving to local storage', e);
    }
  }
}
