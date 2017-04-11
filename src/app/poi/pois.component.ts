import {Component, OnInit} from '@angular/core';
import {PoiService} from '../poi.service';
import {City, Poi} from 'Entities';

@Component({
  selector: 'app-poi-all',
  templateUrl: './pois.component.html',
  styleUrls: ['./pois.component.css'],
  providers: [PoiService]
})
export class NewcomponentComponent implements OnInit {
  allPois: Array<Poi> = [];
  allCities: Map<string, City> = new Map<string, City>();

  constructor(poiService: PoiService) {
    const __this = this;

    poiService.getAllPoi()
      .subscribe(
        pois => this.allPois = pois,
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );

    poiService.getAllCities()
      .subscribe(
        data => {
          data.forEach(function (data2) {
            __this.allCities.set(data2.id, data2);
          });
        },
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );
  }

  trackById(index, contact) {
    return contact.id;
  }

  ngOnInit() {

  }

}
