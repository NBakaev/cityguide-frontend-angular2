import {Component, OnInit} from '@angular/core';
import {City, Poi} from '../entities/poi';
import {PoiService} from '../poi/poi.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.less']
})
export class CitiesListComponent {

  allCities: Array<City> = [];

  constructor(private poiService: PoiService, private router: Router) {
    poiService.getAllCities().subscribe(
      pois => this.allCities = pois,
      error => console.error('Error: ' + error),
      () => {
      }
    );
  }

  addCity() {
    const city = new City();
    this.poiService.addCity(city).subscribe(x => {
      this.allCities.push(x);
    });
  }

  updateCity(city: City) {
    this.poiService.updateCity(city).subscribe(x => {
    });
  }

  deleteCity(poi: City, i: number) {
    this.poiService.deleteCity(poi.id).subscribe(x => {
      this.allCities.splice(i, 1);
    });
  }


}
