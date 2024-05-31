import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  public fav: any[];

  constructor() {
    try {
      const favData = localStorage.getItem('fav');
      this.fav = favData ? JSON.parse(favData) : [];
    } catch (e) {
      console.error('Error parsing local storage data', e);
      this.fav = [];
    }
    console.log(this.fav);
  }
}
