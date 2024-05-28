import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  public favorites;

  constructor() {
    const favString = localStorage.getItem('fav');
    this.favorites = favString ? JSON.parse(favString) : null;
  }
}
